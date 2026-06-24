# Ashley's Strength — Platform Spec v1
## Claude Code Build Document
> A solo devotional for Ashley Campbell. For the quiet ten minutes. Somewhere steady to land.

---

## 1. OVERVIEW

A single deployed site: a short daily devotional Ashley studies on her own, between the Campbell Covenant couch sessions with JP. Same black-and-gold soul, gentler heart.

- **Domain:** `ashleysstrength.vercel.app`
- **Structure:** Home (the entries, no map, no plan) → Entry (one short five-movement sit)
- **Audience:** Ashley, alone, ten quiet minutes, often morning, phone in one hand
- **Aesthetic:** Mirrors Campbell Covenant — black and gold, Cinzel + Lora, low-light readable — but warmer in voice and lighter in weight

This is the sister site to Campbell Covenant. Same build pattern, same design DNA, deliberately different format. Where the couch study is a 30-minute six-stage deep sit, this is a 10-minute complete-in-one-sitting landing place. The difference is the whole point.

---

## 2. THE BRIEF (what Ashley asked for, in her words)

She answered the interview directly. The build serves these, not a generic devotional template:

1. **What keeps her in Scripture:** the story, the meaning, the quiet, AND the call to respond — all four. No single mode.
2. **What it's for:** somewhere steady to land in a quiet ten minutes. Not a thread-continuation of the couch study, not a project. A landing place.
3. **Voice:** warm and gentle. A letter written to her, not a sermon preached at her. (This is a hard break from Campbell Covenant's straight-talking-pastor register.)
4. **The season it must meet:** motherhood, feeling stretched thin, and rest. One woman pouring out faster than she's filled, and the question of where she's allowed to stop. This is the spine of the whole site.
5. **Format:** short and complete, finish in one sitting and walk away — but still carrying real knowledge. Verses that sit with her, that she can look back at. Hebrew and Greek built in, but as a gift, not homework.
6. **Name:** Ashley's Strength.

### The design tension, resolved
- Short + complete vs. Hebrew/Greek depth → the original-language word is **one verified term per entry, handed to her as a small gift inside the text.** Not a study section. Not a worksheet. One word, what it means, why it lands.
- Rest as a theme vs. a site that becomes one more thing to keep up with → **no goals, no streaks, no plan, no count of missed days.** See section 6.

---

## 3. THE ENTRY — FIVE MOVEMENTS

Every entry is short, complete in one sitting (~10 min), and identical in structure. Five movements, top to bottom on one scrolling screen. No stage rail, no six-stage navigation. She reads it through and she's done.

```
1  LAND      One verse to land on. The one that stays. Large, set apart, CSB.
              This is the verse she can look back at — it gets saved (section 6).
2  WHERE     One short paragraph (~2-4 sentences). Where this sits — the story,
              who said it, what was happening. The "context," kept to a breath.
3  THE WORD  One verified Hebrew or Greek word. The term, transliteration, gloss,
              and one warm line on why it lands. The gift, not the worksheet.
4  REST IN IT  The reflection. ~3 short paragraphs. Warm, personal, a letter to her.
              Meets the stretched-thin / motherhood / rest season directly.
5  CARRY     One gentle closing line back to her. A whispered prayer or a soft
              invitation to respond. Never a question that demands homework.
```

### Movement behavior
- The whole entry reveals gently on open — staggered fade-up (~120ms), same as Campbell Covenant, but softer/slower easing.
- **One Mark Complete** at the bottom of the entry (not per-movement). On complete: fills warm gold, stays filled, gentle pulse. See section 6 — this is a record, never a goal.
- The LAND verse is the centerpiece — large, set apart. (No "keep"/save button; that feature was cut.)
- No prev/next pressure, no "N of 30" counter. She moves at her own pace.

---

## 4. CONTENT RULES

1. **All Scripture in CSB.** Quoted, not paraphrased. Labeled "Christian Standard Bible" beneath the LAND verse.
2. **Greek and Hebrew MUST be lexicon-verified.** Same non-negotiable as Campbell Covenant. Every term (spelling, transliteration, gloss) checked against a real lexicon (BDAG / Strong's / HALOT) before it ships. No terms from memory. If a term can't be verified, cut it and pick a different word for that entry. This rule does NOT relax because the site is gentler.
3. **Voice: warm and gentle.** A letter to Ashley. Met, not addressed. Tender, never preachy, never performative. It can be honest about how heavy the season is — gentle is not the same as soft-focus or fake-cheerful. It tells the truth kindly.
4. **The spine is motherhood / stretched thin / rest.** Even entries on other passages come home to this: a woman pouring out, and where she's allowed to stop and be filled. The reflection should make her feel seen, not instructed.
5. **CARRY is never a demand.** No "now go journal about..." No questions that feel like assignments. A whisper, a permission, a short prayer she can pray or just receive.
6. **Length discipline.** WHERE ~2-4 sentences. REST IN IT ~3 short paragraphs. The entire entry must be genuinely completable in ten minutes. If it can't, it's too long — cut.
7. **No guilt anywhere in the copy.** Nothing that implies she should be doing this more, better, or more consistently. The site assumes she came when she could, and that's enough.

---

## 5. DESIGN SYSTEM (mirrors Campbell Covenant, warmed)

### 5.1 Color & base
```css
--bg-base:    #070910
--bg-card:    rgba(255,255,255,.015)
--border:     rgba(201,168,76,.18)
--gold:       #C9A84C
--gold-light: #E8C97A
--gold-pale:  #F5E6B8
--cream:      #ECE0C2
--cream-dim:  #C8B88A
--muted:      #8A7E64
/* warm accent for her site — softer than the couch study's stage colors */
--rose-soft:  #E8B4C4   /* used sparingly: section accent, complete pulse */
```
Lean warmer than Campbell Covenant. More gold-pale and cream, the rose-soft accent on the saved-verse and complete states. Less hard contrast, softer glows.

### 5.2 Typography
```
Display: 'Cinzel'  (Google Fonts) — title, the LAND verse, the word term, labels
Body:    'Lora'    (Google Fonts) — where, reflection, carry
```

### 5.3 Readability
```
LAND verse:   1.25rem, line-height 1.7   (large, set apart, the centerpiece)
Body/reflect: 1.05rem, line-height 1.9    (generous, restful, easy on tired eyes)
```
Mobile-first. Phone in one hand, low light, often early morning. Tap targets ≥ 48px. Generous whitespace — the page should breathe. Restful, not dense.

### 5.4 Motion
- All transitions 0.5-0.7s, eased — slightly slower/softer than the couch study.
- Entry reveals gently on open, staggered ~120ms.
- Mark Complete fills warm and pulses once.
- Mark Complete fills warm and pulses once.
- Respect `prefers-reduced-motion`.

### 5.5 Footer
A gentle line on every entry, small, italic, muted. Hers, not the couch creed:
```
You came. That's enough.
```
(Open to her own line if she has one — this is a placeholder that fits the no-guilt rule.)

---

## 6. THE COMPLETION SYSTEM — "no goals, but marked completion"

This is the most important section and the easiest to get wrong. Ashley said: **no goals, but we want marked completion.** They are not contradictory. The distinction defines the build.

**Marked completion (YES):**
- Each entry has a single Mark Complete. When tapped, it fills and stays filled.
- If she reopens a completed entry, it shows as already done — a quiet "you were here."
- This is a **record**, not a target. A gentle yes.

**Goals (NO — none of these ship):**
- No streak counter.
- No "X of N complete" total or progress-to-a-number.
- No calendar showing missed days.
- No plan, no schedule, no "day 1 / day 2" sequence she has to keep up with.
- No notification nagging her to come back.
- Nothing, anywhere, that can make her feel behind.

**Storage — on-device only:**
- This is Ashley's PERSONAL site, used on ONE device (her phone). There is no
  sync requirement and NO server store. No Vercel KV, no Supabase, no /api route,
  no env vars. Do not build a shared backend — it is unnecessary complexity for
  a single-device personal devotional.
- Completed entry ids persist on her device via localStorage (key
  `ashleys_strength_completed`). That is the entire storage layer.
- No auto-reset. She can un-complete an entry by tapping again. Her control entirely.
- (NOTE: the "keep a verse / Saved Verses" feature was CUT. Do not build it.
  No keep button, no saved view. Completion is the only persisted state.)

---

## 7. TECH STACK

```
Framework:  React 18 + Vite 5
Animation:  Framer Motion (or CSS transitions — match Campbell Covenant)
Styling:    Tailwind + CSS custom properties
Fonts:      Google Fonts (Cinzel + Lora)
Storage:    on-device localStorage only (NO server, NO KV, NO Supabase)
Deploy:     Vercel → ashleysstrength.vercel.app (static, no env vars)
```

### File structure
```
ashleys-strength/
├── src/
│   ├── data/
│   │   └── entries.js       <- all entries, five movements each, FINAL content
│   ├── components/
│   │   ├── Home.jsx         <- the four-section home ("Where are you today?")
│   │   ├── SectionView.jsx  <- the entry list for one section
│   │   ├── Entry.jsx        <- the five-movement reader (the core)
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useCompleted.js  <- localStorage read/write of completed ids (on-device)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── (Vite / Tailwind config — no api/ folder, no @vercel/kv)
```

---

## 8. DATA SHAPE (entries.js)

```javascript
export const ENTRIES = [
  {
    id: 'e001',
    title: 'When You Have Nothing Left to Pour',
    land: {
      ref: 'Isaiah 40:11',
      text: 'CSB text...',          // the verse that stays
    },
    where: 'One short paragraph — the story, kept to a breath.',
    word: {
      hebrewOrGreek: 'נָהַל',
      translit: 'nahal',
      gloss: 'to lead gently, to guide those who are nursing',
      note: 'One warm line on why it lands.',   // LEXICON-VERIFIED
    },
    reflect: [
      'paragraph one...',
      'paragraph two...',
      'paragraph three...',
    ],
    carry: 'One gentle closing line. A whisper, not an assignment.',
  },
  // ... more entries
];
```

---

## 9. BUILD ORDER

1. **Scaffold** Vite + React + Tailwind. Pull Cinzel + Lora. Set the warmed design tokens (section 5).
2. **Build Entry.jsx** — the five-movement reader. Gentle reveal, single Mark Complete at the bottom. No keep/save button on LAND.
3. **Write the entries** into `entries.js`. Content is the long pole. Every Hebrew/Greek term lexicon-verified per Rule 4.2.
4. **Build Home** (the four-section "Where are you today?" screen) **+ SectionView** (entry list per section). No map, no plan, no SavedVerses.
5. **Wire completion** — `useCompleted` hook reading/writing localStorage on her
   device (key `ashleys_strength_completed`). Completed ids only. No server, no
   counters, no KV, no Supabase, no /api route.
6. **Deploy** to `ashleysstrength.vercel.app`. Static build, no env vars, nothing
   to provision in the dashboard.

---

## 10. NOTES FOR CLAUDE CODE

- **The Greek and Hebrew is the one thing that cannot be wrong.** Verify every term against a real lexicon before it ships. If a term can't be verified, pick a different word for that entry. Same standard as Campbell Covenant — gentler site, same rule.
- **CSB wording specifically.** Do not paraphrase Scripture.
- **The voice is the whole product here.** Warm, gentle, a letter to her. If a line sounds like a sermon, a lecture, or a pep talk, rewrite it. Honest and tender, never preachy.
- **No guilt mechanics. Ever.** Re-read section 6 before building any state logic. If a feature could make her feel behind, it doesn't ship.
- **Mobile is primary.** One woman, one phone, ten minutes, often early and tired. Restful, breathing, easy on the eyes.
- **Completion is a record, not a goal.** "You came. That's enough."

---

*Built for Ashley Campbell.*
*For the quiet ten minutes. Somewhere steady to land.*
*"He gently leads those that are with young." — Isaiah 40:11, CSB*
