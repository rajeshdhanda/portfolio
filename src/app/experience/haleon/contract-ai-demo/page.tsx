'use client';

import { getAssetPath } from '../../../../utils/assets'
import { useState, useEffect, useRef } from 'react';

type Step = { label: string; type: 'status' | 'tool'; done: boolean };

type ChatAnswer = {
  tools: string[];
  answer: string;
  sources: string[];
  followups: string[];
};

type Turn = {
  id: number;
  query: string;
  isDeep: boolean;
  steps: Step[];
  answer: string;
  sources: string[];
  followups: string[];
  phase: 'working' | 'streaming' | 'done';
  feedback: 'up' | 'down' | null;
  contractProgress: number;
};

const SAMPLE_CONTRACTS = [
  { id: 'DEMO-1001', supplier: 'Northwind Traders', category: 'Indirects', term: 'Net 60' },
  { id: 'DEMO-1002', supplier: 'Contoso Ltd', category: 'Professional Services', term: 'Net 45' },
  { id: 'DEMO-1003', supplier: 'Fabrikam Inc', category: 'IT Services', term: 'Net 30' },
  { id: 'DEMO-1004', supplier: 'Adventure Works', category: 'Consulting', term: 'Net 60' },
  { id: 'DEMO-1005', supplier: 'Tailspin Toys', category: 'IT Services', term: 'Net 45' },
  { id: 'DEMO-1006', supplier: 'Litware Inc', category: 'Indirects', term: 'Net 30' },
];

// Canned answers keyed to query intent
const CHAT_ANSWERS: Record<string, ChatAnswer> = {
  payment: {
    tools: ['Searching contract documents'],
    answer:
      'Contract DEMO-1001 (Northwind Traders) uses Net 60 payment terms — invoices are due 60 days from the invoice date. A 2% early-payment discount applies if settled within 15 days, and a late-payment interest charge of 1.5% per month applies beyond the due date. Payments are milestone-based and tied to accepted deliverables.',
    sources: ['DEMO-1001 — Master Services Agreement, §7 Payment Terms', 'DEMO-1001 — Schedule B, Fees & Invoicing'],
    followups: ['Are there any late-payment penalties?', 'How do these terms compare to other suppliers?', 'What is the contract value and expiry date?'],
  },
  expire: {
    tools: ['Querying the database'],
    answer:
      '18 contracts expire in 2026. Of these, 7 include auto-renewal clauses that trigger unless notice is given, and 4 are above $5M in value. The earliest 2026 expiry is DEMO-1001 (Northwind Traders) on 31 March 2026; the largest by value is DEMO-1004 (Adventure Works) at $5.6M.',
    sources: ['Contract metadata — sample dataset'],
    followups: ['Which 2026 contracts auto-renew?', 'List the 2026 contracts above $5M', 'Show me the ones expiring in Q1 2026'],
  },
  renewal: {
    tools: ['Searching contract documents'],
    answer:
      'Contract DEMO-1003 (Fabrikam Inc) includes an auto-renewal clause: the agreement renews automatically for successive 24-month terms unless either party gives written notice at least 120 days before the current term ends. There is no cap on the number of renewals, and pricing is subject to an annual CPI-linked adjustment on renewal.',
    sources: ['DEMO-1003 — Agreement, §12 Term & Renewal'],
    followups: ['When is the next renewal deadline?', 'Can pricing change on renewal?', 'Which other contracts auto-renew?'],
  },
  termination: {
    tools: ['Searching contract documents'],
    answer:
      "For Contoso Ltd (DEMO-1002), either party may terminate for convenience with 60 days' written notice. Termination for cause is immediate on a material breach that remains uncured after a 30-day remedy period. On termination, only services accepted up to that date are payable, and all confidential material must be returned or destroyed within 30 days.",
    sources: ['DEMO-1002 — MSA, §15 Termination', 'DEMO-1002 — §9 Confidentiality'],
    followups: ['Is there an early-termination fee?', 'What are the notice periods for other suppliers?', 'What happens to work in progress on termination?'],
  },
  supplier: {
    tools: ['Querying the database'],
    answer:
      'Northwind Traders has 3 active contracts totalling $7.8M: DEMO-1001 (Indirects, Net 60, expires Mar 2026), DEMO-1007 (IT Services, Net 45, expires Aug 2026) and DEMO-1008 (Indirects, Net 60, expires Jan 2027). Two of the three include auto-renewal clauses.',
    sources: ['Contract metadata — supplier & value fields'],
    followups: ['Which of these auto-renew?', 'What are the payment terms for each?', 'Show upcoming renewal deadlines'],
  },
};

const FALLBACK_ANSWER: ChatAnswer = {
  tools: ['Querying the database', 'Searching contract documents'],
  answer:
    'Based on the available contracts, I combined structured metadata with the underlying document text to answer that. Try a more specific question — for example about payment terms, auto-renewal, termination, expiry dates, or a particular supplier or Contract ID.',
  sources: ['Contract metadata', 'Contract documents'],
  followups: ['What are the payment terms in DEMO-1001?', 'How many contracts expire in 2026?', 'Compare payment terms across all contracts'],
};

const DEEP_RESEARCH = {
  title: 'Payment Terms — Portfolio Comparison',
  angles: [
    'payment net days & due dates',
    'early-payment discounts & rebates',
    'late-payment penalties & interest',
    'invoice & milestone schedules',
    'definitions, scope & eligibility',
    'grace periods & exceptions',
  ],
  contracts: [
    { id: 'DEMO-1001', supplier: 'Northwind Traders', term: 'Net 60', discount: '2% / 15 days', penalty: '1.5% / mo' },
    { id: 'DEMO-1002', supplier: 'Contoso Ltd', term: 'Net 45', discount: 'None', penalty: '1% / mo' },
    { id: 'DEMO-1003', supplier: 'Fabrikam Inc', term: 'Net 30', discount: '1% / 10 days', penalty: '2% / mo' },
    { id: 'DEMO-1004', supplier: 'Adventure Works', term: 'Net 60', discount: '2.5% / 20 days', penalty: '1.5% / mo' },
    { id: 'DEMO-1005', supplier: 'Tailspin Toys', term: 'Net 45', discount: 'None', penalty: 'None' },
    { id: 'DEMO-1006', supplier: 'Litware Inc', term: 'Net 30', discount: '1.5% / 10 days', penalty: '1% / mo' },
  ],
  summary:
    'Across the 6 contracts reviewed, payment terms range from Net 30 to Net 60. Net 60 concentrates in the larger engagements (Northwind, Adventure Works), while IT-services suppliers (Fabrikam, Litware) sit at Net 30. Four of six offer early-payment discounts of 1–2.5%, and four apply late-payment interest of 1–2% per month. Tailspin Toys (DEMO-1005) is the only contract with neither an early-payment incentive nor a late-payment penalty — a potential standardisation gap.',
  insights: [
    'Net 60 concentrates in the highest-value contracts, tying up more working capital where spend is largest.',
    'Early-payment discounts (up to 2.5%) exist on 4 of 6 contracts but are applied inconsistently.',
    'Tailspin Toys has no late-payment penalty, creating uneven leverage versus peers.',
    'Standardising to Net 45 with a 2% early-payment discount would improve consistency and cash-flow predictability.',
  ],
  sources: ['Contract documents — §Payment Terms (6 contracts)', 'Contract metadata — payment fields', 'Deep Research report — auto-generated'],
};

const CHAT_EXAMPLES = [
  'What are the payment terms in DEMO-1001?',
  'How many contracts expire in 2026?',
  'Show the auto-renewal clause for DEMO-1003',
  'What does the termination clause say for Contoso?',
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function matchChat(q: string): ChatAnswer {
  const lower = q.toLowerCase();
  const key = Object.keys(CHAT_ANSWERS).find((k) => lower.includes(k));
  if (key) return CHAT_ANSWERS[key];
  if (lower.includes('auto') || lower.includes('renew')) return CHAT_ANSWERS.renewal;
  if (lower.includes('northwind') || lower.includes('list')) return CHAT_ANSWERS.supplier;
  return FALLBACK_ANSWER;
}

const BotAvatar = () => (
  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center shrink-0">
    <svg width="12" height="12" fill="none" stroke="var(--bg)" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  </div>
);

export default function ContractAiDemoPage() {
  const [mode, setMode] = useState<'chat' | 'deep'>('chat');
  const [input, setInput] = useState('');
  const [turns, setTurns] = useState<Turn[]>([]);

  const [fCategory, setFCategory] = useState('');
  const [fSupplier, setFSupplier] = useState('');
  const [fContract, setFContract] = useState('');

  const runIdRef = useRef(0);
  const turnIdRef = useRef(0);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      runIdRef.current += 1;
    };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [turns]);

  const categories = Array.from(new Set(SAMPLE_CONTRACTS.map((c) => c.category)));
  const suppliers = Array.from(new Set(SAMPLE_CONTRACTS.map((c) => c.supplier)));

  const activeFilters = [
    fCategory && `Category: ${fCategory}`,
    fSupplier && `Supplier: ${fSupplier}`,
    fContract && `Contract: ${fContract}`,
  ].filter(Boolean) as string[];

  const patchTurn = (id: number, patch: Partial<Turn>) =>
    setTurns((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));

  const pushStep = async (id: number, label: string, type: 'status' | 'tool', ms: number, myRun: number) => {
    setTurns((prev) => prev.map((t) => (t.id === id ? { ...t, steps: [...t.steps, { label, type, done: false }] } : t)));
    await sleep(ms);
    if (runIdRef.current !== myRun) return;
    setTurns((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, steps: t.steps.map((s, i) => (i === t.steps.length - 1 ? { ...s, done: true } : s)) } : t
      )
    );
  };

  const streamText = async (id: number, full: string, myRun: number) => {
    const words = full.split(' ');
    let acc = '';
    for (let i = 0; i < words.length; i++) {
      if (runIdRef.current !== myRun) return;
      acc = acc ? acc + ' ' + words[i] : words[i];
      patchTurn(id, { answer: acc });
      await sleep(16 + Math.random() * 40);
    }
  };

  const runChat = async (id: number, q: string) => {
    const myRun = ++runIdRef.current;
    const data = matchChat(q);

    await pushStep(id, 'Understanding your query…', 'status', 500, myRun);
    if (runIdRef.current !== myRun) return;
    if (activeFilters.length) {
      await pushStep(id, `Applying filters — ${activeFilters.join(', ')}`, 'status', 450, myRun);
      if (runIdRef.current !== myRun) return;
    }
    await pushStep(id, 'Analysing and selecting tools…', 'status', 550, myRun);
    if (runIdRef.current !== myRun) return;
    for (const t of data.tools) {
      await pushStep(id, t, 'tool', 700, myRun);
      if (runIdRef.current !== myRun) return;
    }
    await pushStep(id, 'Preparing response…', 'status', 450, myRun);
    if (runIdRef.current !== myRun) return;

    patchTurn(id, { phase: 'streaming' });
    await streamText(id, data.answer, myRun);
    if (runIdRef.current !== myRun) return;
    patchTurn(id, { sources: data.sources, followups: data.followups, phase: 'done' });
  };

  const runDeep = async (id: number) => {
    const myRun = ++runIdRef.current;

    await pushStep(id, 'Planning research angles…', 'status', 750, myRun);
    if (runIdRef.current !== myRun) return;
    await pushStep(id, `Identified ${DEEP_RESEARCH.angles.length} angles to investigate`, 'status', 500, myRun);
    if (runIdRef.current !== myRun) return;
    await pushStep(id, `Dispatching agents across ${DEEP_RESEARCH.contracts.length} contracts in parallel…`, 'tool', 650, myRun);
    if (runIdRef.current !== myRun) return;

    for (let i = 1; i <= DEEP_RESEARCH.contracts.length; i++) {
      if (runIdRef.current !== myRun) return;
      patchTurn(id, { contractProgress: i });
      await sleep(420);
    }
    await pushStep(id, 'Compiling findings into a report…', 'status', 800, myRun);
    if (runIdRef.current !== myRun) return;

    patchTurn(id, { phase: 'streaming' });
    await streamText(id, DEEP_RESEARCH.summary, myRun);
    if (runIdRef.current !== myRun) return;
    patchTurn(id, { sources: DEEP_RESEARCH.sources, phase: 'done' });
  };

  const busy = turns.some((t) => t.phase === 'working' || t.phase === 'streaming');

  const send = (override?: string) => {
    const q = (override ?? input).trim();
    if (!q || busy) return;
    setInput('');
    const isDeep = mode === 'deep';
    const id = ++turnIdRef.current;
    const turn: Turn = {
      id,
      query: q,
      isDeep,
      steps: [],
      answer: '',
      sources: [],
      followups: [],
      phase: 'working',
      feedback: null,
      contractProgress: 0,
    };
    setTurns((prev) => [...prev, turn]);
    if (isDeep) runDeep(id);
    else runChat(id, q);
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-16">
      <div className="max-w-[1040px] mx-auto">
        {/* Back Link */}
        <a
          href={getAssetPath('/experience/haleon')}
          className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-6"
        >
          ← Back to Haleon Experience
        </a>

        {/* Header */}
        <div className="mb-5">
          <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--accent)] mb-2">
            Demo — Procurement Contract Intelligence
          </div>
          <h1 className="text-[26px] font-[family-name:var(--font-heading)] text-[var(--text)] mb-2">
            Contract AI Assistant
          </h1>
          <p className="text-[13px] text-[var(--muted)] leading-[1.7] max-w-[640px]">
            Chat with an AI agent that reasons about each question, picks the right sources, and streams a grounded answer — with a Deep Research mode that studies many contracts in parallel and compiles a report.
          </p>
        </div>

        {/* Toolbar: mode + filters */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {([
            { key: 'chat', label: 'Chat' },
            { key: 'deep', label: 'Deep Research' },
          ] as const).map((m) => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              className={`px-3 py-1.5 rounded-[8px] border text-[12px] font-medium transition-colors ${
                mode === m.key
                  ? 'bg-[rgba(200,169,110,0.1)] border-[var(--accent)] text-[var(--accent)]'
                  : 'bg-[var(--bg2)] border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]'
              }`}
            >
              {m.label}
            </button>
          ))}
          <div className="w-px h-5 bg-[var(--border)] mx-1" />
          <select
            value={fCategory}
            onChange={(e) => setFCategory(e.target.value)}
            className="bg-[var(--bg2)] border border-[var(--border)] rounded text-[11px] text-[var(--text)] px-2 py-1.5 outline-none focus:border-[var(--accent)]"
          >
            <option value="">Category</option>
            {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
          <select
            value={fSupplier}
            onChange={(e) => setFSupplier(e.target.value)}
            className="bg-[var(--bg2)] border border-[var(--border)] rounded text-[11px] text-[var(--text)] px-2 py-1.5 outline-none focus:border-[var(--accent)]"
          >
            <option value="">Supplier</option>
            {suppliers.map((s) => (<option key={s} value={s}>{s}</option>))}
          </select>
          <select
            value={fContract}
            onChange={(e) => setFContract(e.target.value)}
            className="bg-[var(--bg2)] border border-[var(--border)] rounded text-[11px] text-[var(--text)] px-2 py-1.5 outline-none focus:border-[var(--accent)]"
          >
            <option value="">Contract ID</option>
            {SAMPLE_CONTRACTS.map((c) => (<option key={c.id} value={c.id}>{c.id}</option>))}
          </select>
          {activeFilters.length > 0 && (
            <button
              onClick={() => { setFCategory(''); setFSupplier(''); setFContract(''); }}
              className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {/* Chat window */}
        <div className="flex flex-col h-[600px] bg-[var(--bg2)] border border-[var(--border)] rounded-[12px] overflow-hidden">
          {/* Chat header bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--bg)]">
            <BotAvatar />
            <div>
              <div className="text-[12px] font-medium text-[var(--text)]">Contract AI</div>
              <div className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--accent2)] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent2)]" />
                {mode === 'deep' ? 'Deep Research mode' : 'Online'}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
            {turns.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <BotAvatar />
                <div className="text-[13px] text-[var(--text)] mt-3 mb-1">How can I help with your contracts?</div>
                <div className="text-[11px] text-[var(--muted)] mb-5">Ask about payment terms, renewals, expiry dates, or compare across contracts.</div>
                <div className="flex flex-wrap justify-center gap-2 max-w-[560px]">
                  {CHAT_EXAMPLES.map((ex) => (
                    <button
                      key={ex}
                      onClick={() => { setMode('chat'); send(ex); }}
                      className="text-[12px] px-3 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                    >
                      {ex}
                    </button>
                  ))}
                  <button
                    onClick={() => { setMode('deep'); send('Compare payment terms across all contracts'); }}
                    className="text-[12px] px-3 py-1.5 rounded-full bg-[rgba(200,169,110,0.08)] border border-[rgba(200,169,110,0.35)] text-[var(--accent)] hover:bg-[rgba(200,169,110,0.15)] transition-colors"
                  >
                    ⚡ Deep Research: compare payment terms
                  </button>
                </div>
              </div>
            )}

            {turns.map((turn) => (
              <div key={turn.id} className="space-y-3">
                {/* User bubble */}
                <div className="flex justify-end">
                  <div className="bg-[rgba(200,169,110,0.12)] border border-[rgba(200,169,110,0.25)] rounded-[12px] rounded-tr-[3px] px-3.5 py-2.5 text-[13px] text-[var(--text)] max-w-[80%]">
                    {turn.query}
                  </div>
                </div>

                {/* Assistant */}
                <div className="flex gap-2.5">
                  <div className="mt-0.5"><BotAvatar /></div>
                  <div className="flex-1 space-y-3 min-w-0">
                    {/* Agent trace */}
                    {turn.steps.length > 0 && (
                      <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[10px] p-3">
                        <div className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">
                          {turn.isDeep ? 'Deep Research — agent trace' : 'Agent trace'}
                        </div>
                        <div className="space-y-1.5">
                          {turn.steps.map((s, i) => (
                            <div key={i} className="flex items-center gap-2">
                              {s.done ? (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent2)" strokeWidth="3" className="shrink-0">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                              ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent2)] animate-pulse shrink-0 mx-[3px]" />
                              )}
                              <span className={`text-[12px] ${s.type === 'tool' ? 'text-[var(--accent2)]' : 'text-[var(--muted)]'}`}>{s.label}</span>
                              {s.type === 'tool' && (
                                <span className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--accent2)] bg-[rgba(93,184,160,0.08)] border border-[rgba(93,184,160,0.2)] px-1.5 py-0.5 rounded">tool</span>
                              )}
                            </div>
                          ))}
                        </div>

                        {turn.isDeep && (
                          <div className="mt-3 pt-3 border-t border-[var(--border)]">
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {DEEP_RESEARCH.angles.map((a) => (
                                <span key={a} className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--muted)] bg-[var(--bg2)] border border-[var(--border)] px-2 py-0.5 rounded">{a}</span>
                              ))}
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                              {DEEP_RESEARCH.contracts.map((c, i) => {
                                const done = turn.contractProgress > i;
                                const active = turn.contractProgress === i && turn.phase === 'working';
                                return (
                                  <div
                                    key={c.id}
                                    className={`flex items-center gap-1.5 text-[10px] font-[family-name:var(--font-mono)] px-2 py-1 rounded border transition-colors ${
                                      done
                                        ? 'border-[rgba(93,184,160,0.3)] text-[var(--accent2)] bg-[rgba(93,184,160,0.05)]'
                                        : active
                                        ? 'border-[var(--accent)] text-[var(--accent)]'
                                        : 'border-[var(--border)] text-[var(--muted)]'
                                    }`}
                                  >
                                    {done ? '✓' : active ? '◍' : '○'} {c.id}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Answer bubble */}
                    {(turn.answer || turn.phase === 'streaming') && (
                      <div className="bg-[var(--bg)] border border-[rgba(200,169,110,0.2)] rounded-[12px] rounded-tl-[3px] p-4">
                        <p className="text-[13px] text-[var(--text)] leading-[1.8]">
                          {turn.answer}
                          {turn.phase === 'streaming' && <span className="inline-block w-[2px] h-[14px] bg-[var(--accent)] ml-0.5 animate-pulse align-middle" />}
                        </p>

                        {turn.phase === 'done' && turn.sources.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-[var(--border)]">
                            <div className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">Sources</div>
                            <div className="flex flex-wrap gap-2">
                              {turn.sources.map((s) => (
                                <span key={s} className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--accent2)] bg-[rgba(93,184,160,0.07)] border border-[rgba(93,184,160,0.2)] px-2 py-0.5 rounded">{s}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        {turn.phase === 'done' && (
                          <div className="mt-3 pt-3 border-t border-[var(--border)] flex items-center gap-3">
                            {turn.feedback ? (
                              <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--accent2)]">Thanks for your feedback</span>
                            ) : (
                              <>
                                <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.1em] text-[var(--muted)]">Was this helpful?</span>
                                <button onClick={() => patchTurn(turn.id, { feedback: 'up' })} aria-label="Helpful" className="text-[var(--muted)] hover:text-[var(--accent2)] transition-colors">
                                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                                  </svg>
                                </button>
                                <button onClick={() => patchTurn(turn.id, { feedback: 'down' })} aria-label="Not helpful" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
                                  </svg>
                                </button>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Deep research report */}
                    {turn.isDeep && turn.phase === 'done' && (
                      <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[12px] p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.1em] text-[var(--muted)] mb-1">Generated Report</div>
                            <h3 className="text-[13px] font-medium text-[var(--text)]">{DEEP_RESEARCH.title}</h3>
                          </div>
                          <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] bg-[rgba(200,169,110,0.1)] border border-[rgba(200,169,110,0.35)] px-3 py-1.5 rounded">↓ Full report</span>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-[12px] border-collapse">
                            <thead>
                              <tr className="text-left text-[var(--muted)] font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.06em]">
                                <th className="py-2 pr-3 font-normal border-b border-[var(--border)]">Contract</th>
                                <th className="py-2 pr-3 font-normal border-b border-[var(--border)]">Supplier</th>
                                <th className="py-2 pr-3 font-normal border-b border-[var(--border)]">Term</th>
                                <th className="py-2 pr-3 font-normal border-b border-[var(--border)]">Early discount</th>
                                <th className="py-2 font-normal border-b border-[var(--border)]">Late penalty</th>
                              </tr>
                            </thead>
                            <tbody>
                              {DEEP_RESEARCH.contracts.map((c) => (
                                <tr key={c.id} className="text-[var(--text-soft)]">
                                  <td className="py-2 pr-3 font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] border-b border-[var(--border)]">{c.id}</td>
                                  <td className="py-2 pr-3 border-b border-[var(--border)]">{c.supplier}</td>
                                  <td className="py-2 pr-3 border-b border-[var(--border)]">{c.term}</td>
                                  <td className="py-2 pr-3 border-b border-[var(--border)]">{c.discount}</td>
                                  <td className="py-2 border-b border-[var(--border)]">{c.penalty}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-4">
                          <div className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">Key insights</div>
                          <ul className="space-y-2">
                            {DEEP_RESEARCH.insights.map((ins) => (
                              <li key={ins} className="text-[12px] text-[var(--text-soft)] leading-[1.6] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[10px]">{ins}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Follow-up questions */}
                    {turn.phase === 'done' && turn.followups.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {turn.followups.map((f) => (
                          <button
                            key={f}
                            onClick={() => { setMode('chat'); send(f); }}
                            className="text-left text-[12px] text-[var(--text-soft)] bg-[var(--bg)] border border-[var(--border)] rounded-full px-3 py-1.5 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Composer */}
          <div className="border-t border-[var(--border)] p-3 bg-[var(--bg)]">
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-2">
                {activeFilters.map((f) => (
                  <span key={f} className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--accent)] bg-[rgba(200,169,110,0.08)] border border-[rgba(200,169,110,0.3)] px-2 py-0.5 rounded">{f}</span>
                ))}
              </div>
            )}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder={mode === 'deep' ? 'Ask a question to research across many contracts…' : 'Message Contract AI…'}
                className="flex-1 bg-[var(--bg2)] border border-[var(--border)] rounded-full text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] px-4 py-2.5 outline-none focus:border-[var(--accent)] transition-colors"
              />
              <button
                onClick={() => send()}
                disabled={busy || !input.trim()}
                className="w-10 h-10 rounded-full bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 shrink-0"
                aria-label="Send"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-6">
          <p className="text-[11px] text-[var(--muted)] leading-[1.6]">
            This is a simplified client-side demo using fictional sample data (names and Contract IDs are made up). The production system is an agentic assistant over a large contract portfolio — combining structured metadata queries with document search, live streaming progress, follow-up suggestions, and a Deep Research mode that studies many contracts in parallel and compiles a structured report.
          </p>
        </div>
      </div>
    </main>
  );
}
