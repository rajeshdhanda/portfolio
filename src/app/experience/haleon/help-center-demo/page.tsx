'use client';

import { getAssetPath } from '../../../../utils/assets'
import { useState, useEffect, useRef, useCallback } from 'react';

const SAMPLE_RESULTS = [
  {
    brand: 'Sensodyne',
    title: 'How to use Sensodyne Rapid Relief toothpaste?',
    snippet: 'Apply a pea-sized amount to a soft-bristled toothbrush. Brush twice daily for at least one minute, focusing on sensitive areas...',
    market: 'UK',
    type: 'Knowledge Article',
  },
  {
    brand: 'Sensodyne',
    title: 'What causes tooth sensitivity?',
    snippet: 'Tooth sensitivity occurs when the enamel that protects teeth gets thinner, or when gum recession exposes the underlying dentin surface...',
    market: 'India',
    type: 'FAQ',
  },
  {
    brand: 'Sensodyne',
    title: 'Sensodyne Pronamel vs Sensodyne Repair & Protect',
    snippet: 'Pronamel is designed to strengthen and re-harden acid-softened enamel, while Repair & Protect uses NovaMin technology to form a reparative layer over exposed dentin...',
    market: 'US',
    type: 'Knowledge Article',
  },
  {
    brand: 'Panadol',
    title: 'Panadol Extra dosage information for adults',
    snippet: 'Adults and children aged 12 years and over: Take 1-2 tablets every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours...',
    market: 'Australia',
    type: 'Product Leaflet',
  },
  {
    brand: 'Panadol',
    title: 'Can I give Panadol to my child under 6?',
    snippet: 'Panadol Children 1-5 Years Suspension is suitable for children aged 1-5. Always use the measuring syringe provided. Dosage is based on weight...',
    market: 'UK',
    type: 'FAQ',
  },
  {
    brand: 'Panadol',
    title: 'Panadol during pregnancy — safety information',
    snippet: 'Paracetamol (Panadol) is generally considered safe during pregnancy when used at recommended doses. Always consult your healthcare provider before use...',
    market: 'Singapore',
    type: 'Knowledge Article',
  },
  {
    brand: 'Voltaren',
    title: 'How long can I use Voltaren Emulgel?',
    snippet: 'Voltaren Emulgel should not be used for more than 14 days unless directed by a doctor. If symptoms persist, consult your healthcare professional...',
    market: 'Germany',
    type: 'FAQ',
  },
  {
    brand: 'Voltaren',
    title: 'Voltaren gel application guide for joint pain',
    snippet: 'Apply a thin layer of gel to the affected area 3-4 times daily. Gently rub into the skin. Wash hands after application unless treating the hands...',
    market: 'France',
    type: 'Product Leaflet',
  },
  {
    brand: 'Voltaren',
    title: 'Can I use Voltaren with heat therapy?',
    snippet: 'Do not apply heat (heating pads, hot water bottles) to the treated area as it may increase absorption and risk of side effects...',
    market: 'US',
    type: 'FAQ',
  },
  {
    brand: 'Centrum',
    title: 'Centrum Multivitamin ingredients and benefits',
    snippet: 'Centrum Adults contains essential vitamins and minerals including Vitamin D, B12, Iron, and Zinc to support overall health and immunity...',
    market: 'US',
    type: 'Knowledge Article',
  },
  {
    brand: 'Centrum',
    title: 'Best time to take Centrum multivitamins?',
    snippet: 'Take one tablet daily with food and water. Taking with a meal helps improve absorption of fat-soluble vitamins (A, D, E, K)...',
    market: 'India',
    type: 'FAQ',
  },
  {
    brand: 'Centrum',
    title: 'Centrum Silver vs Centrum Adults — key differences',
    snippet: 'Centrum Silver is formulated for adults 50+ with higher Vitamin D, B12, and less Iron compared to the standard Centrum Adults formula...',
    market: 'Canada',
    type: 'Knowledge Article',
  },
  {
    brand: 'Advil',
    title: 'Can I take Advil with other medications?',
    snippet: 'Consult your doctor before taking Advil with blood thinners, ACE inhibitors, or other NSAIDs. Avoid combining with alcohol...',
    market: 'Canada',
    type: 'FAQ',
  },
  {
    brand: 'Advil',
    title: 'Advil vs Tylenol — when to use which?',
    snippet: 'Advil (ibuprofen) is an anti-inflammatory best for muscle pain, inflammation, and headaches. Tylenol (acetaminophen) is better for fever and pain without inflammation...',
    market: 'US',
    type: 'Knowledge Article',
  },
  {
    brand: 'Caltrate',
    title: 'Caltrate Plus Minerals — calcium absorption tips',
    snippet: 'Take Caltrate with food for better absorption. Split doses if taking more than 500mg. Vitamin D in the formula enhances calcium uptake...',
    market: 'Australia',
    type: 'Knowledge Article',
  },
  {
    brand: 'Otrivin',
    title: 'How often can I use Otrivin nasal spray?',
    snippet: 'Adults: 1-2 sprays per nostril, up to 3 times daily. Do not use for more than 7 consecutive days to avoid rebound congestion...',
    market: 'India',
    type: 'Product Leaflet',
  },
  {
    brand: 'Otrivin',
    title: 'Otrivin for children — age recommendations',
    snippet: 'Otrivin Paediatric (0.05%) is suitable for children aged 2-6 years. For infants under 2, consult a physician before use...',
    market: 'Germany',
    type: 'FAQ',
  },
  {
    brand: 'Eno',
    title: 'How does Eno antacid work for acidity relief?',
    snippet: 'Eno reacts with stomach acid to produce carbon dioxide, which helps relieve bloating. Sodium bicarbonate and citric acid neutralize excess acid within 6 seconds...',
    market: 'India',
    type: 'Knowledge Article',
  },
  {
    brand: 'Eno',
    title: 'Can I take Eno daily for recurring acidity?',
    snippet: 'Eno is intended for occasional use. If you experience acidity more than twice a week, consult a doctor. Prolonged use may affect sodium levels...',
    market: 'India',
    type: 'FAQ',
  },
  {
    brand: 'Fenistil',
    title: 'Fenistil gel for insect bites — usage instructions',
    snippet: 'Apply a thin layer of Fenistil Gel to affected skin 2-4 times daily. Avoid application on broken skin, sunburned areas, or large body surfaces...',
    market: 'Germany',
    type: 'Product Leaflet',
  },
];

// AI-generated answers mapped to search queries
const AI_ANSWERS: Record<string, { answer: string; sources: string[] }> = {
  sensodyne: {
    answer: 'Sensodyne is a toothpaste brand specifically designed for people with sensitive teeth. It works by using active ingredients like potassium nitrate or stannous fluoride that help block the pain signals from the tooth surface to the nerve. For best results, brush twice daily with a pea-sized amount for at least one minute, focusing on sensitive areas. Sensodyne Rapid Relief provides fast relief in as little as 60 seconds when directly applied to sensitive areas. The Pronamel variant is specifically designed to protect against acid erosion, while Repair & Protect uses NovaMin technology to form a protective layer over exposed dentin.',
    sources: ['sensodyne.co.uk/knowledge-base', 'sensodyne.com/products', 'sensodyne.in/faqs'],
  },
  panadol: {
    answer: 'Panadol (paracetamol/acetaminophen) is a widely used pain reliever and fever reducer. For adults, the recommended dose is 1-2 tablets (500mg each) every 4-6 hours, not exceeding 8 tablets (4000mg) in 24 hours. For children, dosing is weight-based — Panadol Children 1-5 Years Suspension should be administered using the provided measuring syringe. Panadol is generally considered safe during pregnancy at recommended doses, but always consult your healthcare provider. Do not take with other paracetamol-containing products to avoid overdose risk. Allow at least 4 hours between doses.',
    sources: ['panadol.com.au/dosage-guide', 'panadol.co.uk/children', 'panadol.com.sg/safety'],
  },
  voltaren: {
    answer: 'Voltaren Emulgel contains diclofenac, a non-steroidal anti-inflammatory drug (NSAID) that works by reducing inflammation and pain at the site of application. Apply a thin layer to the affected area 3-4 times daily and gently rub into the skin. Wash hands thoroughly after application unless treating the hands. Important: Do not use for more than 14 consecutive days without medical advice. Avoid applying heat therapy (heating pads, hot water bottles) to treated areas as this may increase absorption and side effects. Do not use on broken or damaged skin, and avoid exposure to sunlight on treated areas.',
    sources: ['voltaren.de/emulgel', 'voltaren.com/usage-guide', 'voltaren.fr/notice'],
  },
  centrum: {
    answer: 'Centrum is a comprehensive multivitamin brand offering formulations for different life stages. Centrum Adults provides essential vitamins and minerals including Vitamin D, B12, Iron, and Zinc for overall health support. Take one tablet daily with food and water — taking with a meal improves absorption of fat-soluble vitamins (A, D, E, K). Centrum Silver is specifically formulated for adults 50+ with adjusted nutrient levels: higher Vitamin D and B12, but less Iron compared to the standard formula. Do not exceed the recommended dose. Store in a cool, dry place away from direct sunlight.',
    sources: ['centrum.com/products', 'centrum.ca/silver-vs-adults', 'centrum.in/faqs'],
  },
  advil: {
    answer: 'Advil contains ibuprofen, a non-steroidal anti-inflammatory drug (NSAID) effective for pain relief, fever reduction, and inflammation. It is particularly effective for muscle pain, headaches, dental pain, and menstrual cramps. Adults can take 1-2 tablets (200mg each) every 4-6 hours as needed, not exceeding 3 tablets in 24 hours unless directed by a doctor. Important drug interactions: consult your doctor before combining with blood thinners, ACE inhibitors, or other NSAIDs. Avoid alcohol while taking Advil. Unlike Tylenol (acetaminophen), Advil has anti-inflammatory properties making it better suited for swelling and inflammation.',
    sources: ['advil.ca/dosage', 'advil.com/drug-interactions', 'advil.com/advil-vs-tylenol'],
  },
  otrivin: {
    answer: 'Otrivin (xylometazoline) is a nasal decongestant spray that provides fast relief from nasal congestion due to colds, sinusitis, or allergies. For adults: apply 1-2 sprays per nostril, up to 3 times daily. Important: Do not use for more than 7 consecutive days as prolonged use can cause rebound congestion (rhinitis medicamentosa). For children aged 2-6, use Otrivin Paediatric (0.05% concentration). Do not use in infants under 2 years without physician consultation. Wait at least 8 hours between applications. Tilt your head slightly forward when spraying for optimal delivery.',
    sources: ['otrivin.in/usage-guide', 'otrivin.de/kinder', 'otrivin.com/nasal-care'],
  },
  eno: {
    answer: 'Eno is a fast-acting antacid that provides relief from acidity, heartburn, and indigestion within 6 seconds. It contains sodium bicarbonate and citric acid which react with stomach acid to neutralize it, producing carbon dioxide that helps relieve bloating and gas. Dissolve one sachet in a glass of water and drink. Eno is intended for occasional, symptomatic relief only. Do not use daily for recurring acidity — if symptoms occur more than twice a week, consult a doctor as this may indicate a more serious condition like GERD. Prolonged use may affect sodium levels and is not recommended for those on sodium-restricted diets.',
    sources: ['eno.in/how-it-works', 'eno.in/faqs', 'eno.in/when-to-see-doctor'],
  },
  'tooth sensitivity': {
    answer: 'Tooth sensitivity (dentin hypersensitivity) occurs when the protective enamel layer thins or when gum recession exposes the underlying dentin. Common triggers include hot, cold, sweet, or acidic foods and beverages, as well as cold air. Causes include aggressive brushing, acidic diet, teeth grinding, gum disease, and recent dental procedures. Treatment options include desensitizing toothpaste (like Sensodyne with potassium nitrate), fluoride treatments, dental bonding for exposed roots, and in severe cases, root canal therapy. Prevention: use a soft-bristled brush, avoid excessive force, limit acidic foods, and use fluoride mouthwash.',
    sources: ['sensodyne.com/sensitivity-causes', 'sensodyne.in/dental-health', 'sensodyne.co.uk/tips'],
  },
  pregnancy: {
    answer: 'During pregnancy, medication safety is crucial. Paracetamol (Panadol) is generally considered the safest over-the-counter pain reliever during pregnancy when used at recommended doses for short periods. However, NSAIDs like ibuprofen (Advil) and diclofenac (Voltaren) should be avoided, especially in the third trimester, as they may affect fetal circulation and delay labor. For nasal congestion, saline sprays are preferred over decongestants like Otrivin. Multivitamins like Centrum Prenatal are specifically formulated for pregnancy with adequate folic acid, iron, and DHA. Always consult your healthcare provider before taking any medication during pregnancy.',
    sources: ['panadol.com.sg/pregnancy-safety', 'centrum.com/prenatal', 'haleon.com/safe-medication'],
  },
  'joint pain': {
    answer: 'For joint pain relief, topical NSAIDs like Voltaren Emulgel (diclofenac) provide targeted anti-inflammatory action directly at the site of pain. Apply a thin layer 3-4 times daily and massage gently. For systemic relief, oral NSAIDs like Advil (ibuprofen) can help reduce both pain and inflammation. Complementary approaches include maintaining adequate Vitamin D and calcium levels (Caltrate, Centrum), regular gentle exercise, and weight management. Avoid combining topical and oral NSAIDs without medical advice. If joint pain persists beyond 2 weeks, is accompanied by swelling or redness, or limits daily activities, consult a healthcare professional.',
    sources: ['voltaren.com/joint-pain', 'advil.com/muscle-joint', 'caltrate.com.au/bone-health'],
  },
  fenistil: {
    answer: 'Fenistil Gel (dimetindene maleate) is an antihistamine gel for topical use that provides relief from itching and irritation caused by insect bites, minor skin allergies, and mild sunburn. Apply a thin layer to the affected area 2-4 times daily. Do not apply on broken skin, open wounds, sunburned areas, or large body surfaces. For insect bites, clean the area first, then apply gently without rubbing. If symptoms worsen or persist beyond 3 days, consult a doctor. Fenistil is not recommended for children under 1 year without medical supervision. Avoid contact with eyes and mucous membranes.',
    sources: ['fenistil.de/gel-anwendung', 'fenistil.com/insect-bites', 'fenistil.de/kinder'],
  },
  caltrate: {
    answer: 'Caltrate is a calcium supplement designed to support bone health and help prevent osteoporosis. Caltrate Plus contains calcium along with essential minerals (magnesium, zinc, copper, manganese) and Vitamin D3 for enhanced absorption. For optimal absorption: take with food, split doses if taking more than 500mg at once, and maintain adequate Vitamin D levels. Take at a different time from iron supplements or certain medications (tetracyclines, bisphosphonates) which may interfere with absorption. Adults generally need 1000-1200mg of calcium daily from all sources combined. Regular weight-bearing exercise alongside supplementation best supports bone density.',
    sources: ['caltrate.com.au/absorption-tips', 'caltrate.com/bone-health', 'caltrate.com/plus-minerals'],
  },
};

const SUGGESTIONS = [
  'sensodyne sensitivity relief',
  'panadol dosage children',
  'voltaren gel joint pain',
  'centrum vitamins benefits',
  'advil vs panadol',
  'otrivin nasal spray usage',
  'eno acidity relief',
  'caltrate calcium absorption',
  'tooth sensitivity causes',
  'pregnancy safe medication',
  'fenistil insect bites',
  'joint pain treatment',
];

export default function HelpCenterDemoPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof SAMPLE_RESULTS>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searched, setSearched] = useState(false);
  const [aiAnswer, setAiAnswer] = useState('');
  const [aiSources, setAiSources] = useState<string[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const streamRef = useRef<NodeJS.Timeout | null>(null);

  const getAiAnswer = useCallback((searchTerm: string) => {
    // Find matching AI answer
    const key = Object.keys(AI_ANSWERS).find(
      (k) => searchTerm.toLowerCase().includes(k) || k.includes(searchTerm.toLowerCase())
    );
    return key ? AI_ANSWERS[key] : null;
  }, []);

  const streamAnswer = useCallback((fullAnswer: string, sources: string[]) => {
    setAiAnswer('');
    setAiSources(sources);
    setIsStreaming(true);

    const words = fullAnswer.split(' ');
    let currentIndex = 0;

    const stream = () => {
      if (currentIndex < words.length) {
        // Stream 1-3 words at a time for natural feel
        const chunkSize = Math.random() > 0.7 ? 3 : Math.random() > 0.4 ? 2 : 1;
        const chunk = words.slice(currentIndex, currentIndex + chunkSize).join(' ');
        setAiAnswer((prev) => (prev ? prev + ' ' + chunk : chunk));
        currentIndex += chunkSize;
        // Variable delay for natural streaming feel
        const delay = Math.random() > 0.85 ? 80 : Math.random() > 0.5 ? 40 : 25;
        streamRef.current = setTimeout(stream, delay);
      } else {
        setIsStreaming(false);
      }
    };

    streamRef.current = setTimeout(stream, 300); // Initial delay before streaming starts
  }, []);

  useEffect(() => {
    return () => {
      if (streamRef.current) clearTimeout(streamRef.current);
    };
  }, []);

  const handleSearch = (q?: string) => {
    const searchTerm = q || query;
    if (!searchTerm.trim()) return;

    // Clear previous stream
    if (streamRef.current) clearTimeout(streamRef.current);

    setQuery(searchTerm);
    setShowSuggestions(false);
    setSearched(true);
    setAiAnswer('');
    setAiSources([]);

    // Filter results
    const filtered = SAMPLE_RESULTS.filter(
      (r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.snippet.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered.length > 0 ? filtered : SAMPLE_RESULTS.slice(0, 4));

    // Start AI answer streaming
    const aiData = getAiAnswer(searchTerm);
    if (aiData) {
      streamAnswer(aiData.answer, aiData.sources);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-16">
      <div className="max-w-[900px] mx-auto">
        {/* Back Link */}
        <a
          href={getAssetPath('/experience/haleon')}
          className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          ← Back to Haleon Experience
        </a>

        {/* Header */}
        <div className="mb-10">
          <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--accent)] mb-2">
            Demo — Global Consumer Help Center
          </div>
          <h1 className="text-[28px] font-[family-name:var(--font-heading)] text-[var(--text)] mb-2">
            Federated Search
          </h1>
          <p className="text-[13px] text-[var(--muted)] leading-[1.7] max-w-[600px]">
            AI-powered search across 15+ brand help centers, 400+ websites, multiple countries and languages. Features AI Overview (streaming answer) + traditional search results.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="flex items-center bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] overflow-hidden focus-within:border-[var(--accent)] transition-colors">
            <span className="pl-4 text-[var(--muted)]">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(e.target.value.length > 0);
                if (!e.target.value) {
                  setSearched(false);
                  setAiAnswer('');
                }
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search across all brand help centers..."
              className="w-full bg-transparent text-[14px] text-[var(--text)] placeholder:text-[var(--muted)] px-3 py-3.5 outline-none"
            />
            <button
              onClick={() => handleSearch()}
              className="px-5 py-3.5 bg-[var(--accent)] text-[var(--bg)] text-[12px] font-medium hover:opacity-90 transition-opacity"
            >
              Search
            </button>
          </div>

          {/* Autocomplete Suggestions */}
          {showSuggestions && !searched && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[var(--bg2)] border border-[var(--border)] rounded-[8px] overflow-hidden z-10">
              {SUGGESTIONS.filter((s) => s.includes(query.toLowerCase())).slice(0, 6).map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSearch(suggestion)}
                  className="w-full text-left px-4 py-2.5 text-[13px] text-[var(--text)] hover:bg-[rgba(200,169,110,0.05)] transition-colors border-b border-[var(--border)] last:border-0"
                >
                  <span className="text-[var(--muted)] mr-2">↗</span>
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* AI Overview */}
        {searched && (aiAnswer || isStreaming) && (
          <div className="mb-8 bg-[var(--bg2)] border border-[rgba(200,169,110,0.2)] rounded-[10px] p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center">
                <svg width="10" height="10" fill="none" stroke="var(--bg)" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)]">
                AI Overview
              </span>
              {isStreaming && (
                <span className="ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent2)] animate-pulse" />
                  <span className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--accent2)]">Generating</span>
                </span>
              )}
            </div>
            <p className="text-[13px] text-[var(--text)] leading-[1.8]">
              {aiAnswer}
              {isStreaming && <span className="inline-block w-[2px] h-[14px] bg-[var(--accent)] ml-0.5 animate-pulse align-middle" />}
            </p>
            {!isStreaming && aiSources.length > 0 && (
              <div className="mt-4 pt-3 border-t border-[var(--border)]">
                <div className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">Sources</div>
                <div className="flex flex-wrap gap-2">
                  {aiSources.map((source) => (
                    <span key={source} className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--accent2)] bg-[rgba(93,184,160,0.07)] border border-[rgba(93,184,160,0.2)] px-2 py-0.5 rounded">
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Filters */}
        {searched && (
          <div className="flex flex-wrap gap-2 mb-6">
            {['All', 'Knowledge Articles', 'FAQs', 'Product Leaflets'].map((filter) => (
              <span
                key={filter}
                className={`font-[family-name:var(--font-mono)] text-[10px] px-3 py-1.5 rounded cursor-pointer transition-colors ${
                  filter === 'All'
                    ? 'bg-[rgba(200,169,110,0.1)] border border-[var(--accent)] text-[var(--accent)]'
                    : 'bg-[var(--bg2)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {filter}
              </span>
            ))}
          </div>
        )}

        {/* Search Results */}
        {searched && (
          <div className="space-y-3">
            <div className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] mb-3">
              {results.length} results found across {new Set(results.map((r) => r.brand)).size} brands • {new Set(results.map((r) => r.market)).size} markets
            </div>
            {results.map((result, i) => (
              <div
                key={i}
                className="bg-[var(--bg2)] border border-[var(--border)] rounded-[8px] p-4 hover:border-[rgba(200,169,110,0.3)] transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--accent)] bg-[rgba(200,169,110,0.07)] px-2 py-0.5 rounded">
                    {result.brand}
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)]">
                    {result.market}
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] ml-auto">
                    {result.type}
                  </span>
                </div>
                <h3 className="text-[14px] font-medium text-[var(--text)] mb-1">{result.title}</h3>
                <p className="text-[12px] text-[var(--muted)] leading-[1.6]">{result.snippet}</p>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!searched && (
          <div className="text-center py-12">
            <div className="text-[var(--muted)] text-[13px] mb-2">
              Search for a brand or health topic to see AI Overview + search results
            </div>
            <div className="text-[var(--muted)] text-[11px] mb-5 opacity-70">
              Try one of these popular queries:
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {['sensodyne', 'panadol', 'voltaren', 'centrum', 'otrivin', 'eno', 'advil', 'pregnancy', 'joint pain', 'fenistil', 'caltrate', 'tooth sensitivity'].map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                    handleSearch(term);
                  }}
                  className="font-[family-name:var(--font-mono)] text-[11px] px-3 py-1.5 rounded bg-[var(--bg2)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 pt-6 border-t border-[var(--border)]">
          <p className="text-[11px] text-[var(--muted)] leading-[1.6]">
            This is a simplified client-side demo with 20 sample entries across 8 brands and 7 markets. The production system uses Azure AI Search with hybrid (vector + keyword) retrieval, semantic ranker, multilingual support, and LLM-powered answer generation with RAG across 400+ brand websites spanning 15+ help centers.
          </p>
        </div>
      </div>
    </main>
  );
}
