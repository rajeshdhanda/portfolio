# PRD: Portfolio Redesign — Rajesh Dhanda
**Version:** 1.0  
**Goal:** Clean, concise, high first-impression portfolio where depth is accessible but never overwhelming.

---

## 1. Problem Statement

The current portfolio is content-rich but suffers from:
- **Information overload on first load** — every job achievement, tech tag, award, and bullet is visible at once
- **No visual hierarchy** — the eye doesn't know where to go first
- **Scroll fatigue** — the full page is extremely long with no progressive disclosure
- **Redundancy** — skills are listed inline in experience AND in a dedicated Skills section
- **Sections of unequal weight** — a 3-month internship gets the same screen real estate as a 3-year job
- **No clear CTA** — the call-to-action is buried far below the fold

---

## 2. Target Audience

| Visitor Type | What They Want | Time Budget |
|---|---|---|
| Hiring manager / recruiter | Title, company, impact, contact | 30 seconds |
| Senior engineer / tech lead | Stack depth, architecture decisions | 2–3 minutes |
| Collaborator / founder | Projects, thinking style, personality | 1–2 minutes |

The redesign must serve **all three** — with the first impression catering to the fastest scanner, and depth available on demand.

---

## 3. Design Principles

1. **One screen, one message** — the hero communicates who you are and what you're best at. Nothing else competes.
2. **Progressive disclosure** — summaries visible by default; full detail opens in a new tab or expandable drawer.
3. **Depth via links, not inline text** — Google Docs, Medium posts, GitHub, and demo videos are linked out, not embedded.
4. **Consistent density** — every section card has the same visual weight regardless of content length.
5. **Mobile-first** — the majority of quick-glance portfolio views happen on phones.

---

## 4. Information Architecture (Revised)

### Retained (restructured)
- Hero
- Experience (condensed cards)
- Skills (visual, grouped — no redundant tech tags)
- Notable Projects / Highlights (3–4 max)
- Education + Certs (collapsed table)
- Contact

### Moved to "open in new tab"
- Full bullet-by-bullet job descriptions → each role links to a dedicated `/experience/haleon` etc. page or Google Doc
- Awards text → tooltip or modal on hover
- Competitions → small card grid, leaderboard links open externally
- CanvasNote section → standalone project page linked from Projects
- IIT Academic Projects → linked from Education
- Blog posts → linked from Experience cards

### Removed / consolidated
- Redundant tech tags (listed 3× across hero, experience, skills)
- "Career Highlights" counter block (merge into hero subtitle)
- "Start a Conversation" email template widget (replace with simple mailto + social row)

---

## 5. Section Specs

### 5.1 Hero (Above the fold)
**Current issue:** Tagline is good but the body copy is 5 lines long; CTA buttons buried.

**Redesigned:**
```
[Name — large]
[One-liner: ML Platform Engineer · 5 yrs · Haleon → CARS24 → IIT Kanpur]
[2-line bio max: what you build + what makes you different]
[Résumé ↗]  [LinkedIn ↗]  [GitHub ↗]
```
- Profile photo kept (personal, approachable)
- Cloud logos (Azure / GCP / Databricks) remain as visual trust signals — 5 max, no labels

---

### 5.2 Experience (Timeline Cards)
**Current issue:** Each role has 600–1000 words of inline bullets visible by default.

**Redesigned — each card shows:**
```
[Company logo]  [Role title]  [Tenure]
[1 sentence: what you owned]
[3 impact bullets — max 12 words each]
[Tech chips: 5–6 max]
[→ Full details]   ← opens new tab or drawer
```
- "Full details" link goes to existing detailed content (keep as-is) but off the main page
- Awards collapse into a small ★ badge on the card; hover shows award name

---

### 5.3 Skills
**Current issue:** Four icon-group blocks repeat tech already listed in experience.

**Redesigned:**
- Single visual grid, grouped by domain (Cloud / MLOps / Backend / Data)
- No prose descriptions
- Max 20 items total — if it's not a primary skill, it lives in the detailed experience page

---

### 5.4 Highlights / Featured Work (NEW section, replaces Projects + CanvasNote)
3–4 cards only. Each card:
```
[Name]  [Type: Platform / App / Open Source]
[1 sentence what it does]
[Biggest metric or outcome]
[→ View Project]
```
Candidates: GenAI Assistant, Global Help Center, CanvasNote, Data Flow Pipeline

---

### 5.5 Competitions
**Current:** 3 separate full-width blocks  
**Redesigned:** Compact 3-column row of badge cards (rank · challenge name · year · link)

---

### 5.6 Education
**Current:** Full table + 9 exam scores + certs block  
**Redesigned:**
```
M.Sc Physics — IIT Kanpur (2020)
B.Sc Physics — MDU Rohtak (2018)
[JEST AIR 65 · IIT JAM AIR 22 · GATE CSE]   ← small chips
[View Certifications ↗]
```

---

### 5.7 Contact
**Current:** Complex "choose a topic" email template widget  
**Redesigned:**
```
rajeshkrdhanda@gmail.com   [Copy]
[LinkedIn]  [GitHub]  [Medium]  [YouTube]
```

---

## 6. Navigation
**Current:** 9-item nav bar  
**Redesigned:** 5 items max
```
[Rajesh]    Experience · Skills · Projects · Contact    [Resume ↗]
```
Sticky on scroll; collapses to hamburger on mobile.

---

## 7. Visual Design Direction

| Property | Recommendation |
|---|---|
| Theme | Dark with muted warm-neutral tones (not pure black) |
| Accent | Single accent color — electric teal or amber |
| Typography | Display: geometric serif or condensed sans for name/headings; body: clean readable sans |
| Cards | Subtle border + glass-morphism or flat with generous padding |
| Animations | Subtle fade-in on scroll; no heavy JS animations |
| Density | Generous whitespace; max 2 columns on desktop |

---

## 8. Technical Notes

- **Framework:** Keep existing static site (GitHub Pages); no rebuild required
- **New tab links:** All "full detail" expansions open `target="_blank"`
- **Detail pages:** Can be simple markdown-rendered GitHub pages per role
- **No iframes** for demos on main page — link out instead
- **Performance:** Remove unused animation scripts; lazy-load images

---

## 9. Success Metrics (Qualitative)

- A recruiter can understand your profile in under 30 seconds without scrolling
- The page fits on 2–3 full-screen lengths on desktop (vs. current ~12–15)
- Every section has one primary action (read more, view project, contact)
- Zero redundant tech tag lists

---

## 10. Out of Scope

- Backend / CMS
- Contact form with server logic
- Analytics integration
- Multi-language support
