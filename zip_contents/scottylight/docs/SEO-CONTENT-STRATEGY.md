# Scotty Light — SEO & Content Strategy

## Overview

Target market: Australian homeowners, renovators, Airbnb hosts, interior designers
Primary geography: Australia (Gold Coast / Byron Bay / Sydney / Melbourne)
Domain authority strategy: Long-tail first, then build to competitive terms

---

## Keyword Strategy

### Tier 1 — Quick Wins (low competition, high intent)

These are achievable in months 1-3 for a new domain.

| Keyword | Monthly Searches (AU) | Intent | Page Type |
|---|---|---|---|
| airbnb bedroom lighting ideas australia | 110 | Commercial | Guide |
| 2700k vs 3000k warm white | 320 | Informational | Learn |
| best warm led strip lights australia | 210 | Commercial | Product Guide |
| how to layer lighting in a living room | 480 | Informational | Learn |
| airbnb lighting tips | 170 | Informational | Airbnb Hub |
| japandi lighting ideas australia | 90 | Inspirational | Ideas |
| best bedside lamps australia 2025 | 390 | Commercial | Product Guide |
| lighting for airbnb reviews | 80 | Informational | Airbnb |
| boutique hotel bathroom lighting | 140 | Inspirational | Shop The Look |
| coastal hamptons lighting ideas | 210 | Inspirational | Ideas |

### Tier 2 — Medium Term (months 3-9)

| Keyword | Monthly Searches (AU) | Intent | Page Type |
|---|---|---|---|
| best smart bulbs australia | 880 | Commercial | Product Guide |
| outdoor lighting ideas australia | 590 | Inspirational | Ideas |
| how to light a bedroom australia | 320 | Informational | Learn |
| warm home lighting guide | 210 | Informational | Lead Magnet |
| best dimmers australia | 290 | Commercial | Product Guide |
| lighting mistakes to avoid | 480 | Informational | Learn |

### Tier 3 — Long Game (9+ months)

| Keyword | Monthly Searches (AU) | Intent | Page Type |
|---|---|---|---|
| best lighting australia | 2,400 | Commercial | Hub page |
| lighting ideas living room australia | 1,900 | Inspirational | Ideas |
| interior lighting design australia | 720 | Commercial | About/Services |
| beacon lighting reviews | 1,300 | Commercial | Brand review |
| smart home lighting australia | 1,100 | Commercial | Product Guide |

---

## Content Calendar — First 90 Days

### Month 1 (Foundation)

**Priority: Get indexed. Establish topical authority.**

Week 1:
- Homepage live with all sections
- Airbnb Lighting hub page live
- About page live

Week 2:
- POST: "2700K vs 3000K: Which Warm White Temperature Is Right for Your Home?"
  - Target: `2700k vs 3000k warm white`
  - Word count: 1,200
  - Monetisation: Globe affiliate links (Beacon, Amazon)

- POST: "Why Downlights Feel Harsh (And What To Do About It)"
  - Target: `why downlights feel harsh`
  - Word count: 900
  - Monetisation: Dimmer affiliate links

Week 3:
- POST: "Airbnb Mood Lighting: How Lighting Influences Your Reviews"
  - Target: `airbnb lighting tips`, `lighting for airbnb reviews`
  - Word count: 1,800
  - Monetisation: Smart globe affiliate links, email list signup

- PRODUCT GUIDE: "Best Warm LED Strip Lights in Australia (2025)"
  - Target: `best warm led strip lights australia`
  - Word count: 1,400
  - Monetisation: Amazon Associates, Commission Factory

Week 4:
- POST: "How To Layer Lighting Like an Interior Designer"
  - Target: `how to layer lighting in a living room`
  - Word count: 1,500
  - Monetisation: Product recommendations throughout

- SHOP THE LOOK: Warm Earthy Bedroom (first curated room)

---

### Month 2 (Authority Building)

- POST: "Airbnb Bedroom Lighting: The Setup That Gets You Mentioned in Reviews"
- POST: "The Japandi Lighting Guide for Australian Homes"
- PRODUCT GUIDE: "Best Bedside Lamps Australia (Tested and Reviewed)"
- POST: "Boutique Hotel Bathroom Lighting: How To Get the Look at Home"
- SHOP THE LOOK: Coastal Airbnb Retreat
- POST: "Lighting Mistakes Every Homeowner Makes (And How To Fix Them)"

---

### Month 3 (Monetisation Focus)

- PRODUCT GUIDE: "Best Smart Bulbs Australia — Philips Hue vs LIFX vs Govee"
- POST: "Airbnb Outdoor Lighting: First Impressions and 5-Star Reviews"
- PRODUCT GUIDE: "Best Dimmer Switches Australia (Compatible With LED)"
- POST: "Hotel-Style Lighting at Home: The 5 Design Principles"
- SHOP THE LOOK: Boutique Hotel Bathroom
- POST: "Before & After: Lighting Transformation at The Sadhu Hut"
  *(This uses your own property — massive credibility builder and unique content)*

---

## On-Page SEO Checklist (Per Article)

Every piece of content should include:

- [ ] Target keyword in H1 (naturally)
- [ ] Target keyword in first 100 words
- [ ] 2-3 related keywords in H2/H3 subheadings
- [ ] Meta title under 60 characters with keyword
- [ ] Meta description under 155 characters with keyword + CTA
- [ ] At least one internal link to a product guide or shop the look
- [ ] At least one internal link to a related article
- [ ] Affiliate links with rel="sponsored" attribute
- [ ] Alt text on all images with descriptive keywords
- [ ] Author byline (Scott) with schema markup
- [ ] Last updated date visible

---

## Technical SEO Setup

### Immediate priorities (before publishing)

1. **Google Search Console** — verify domain, submit sitemap
2. **Google Analytics 4** — install via Next.js Script component
3. **Sitemap** — use `next-sitemap` package, auto-generates on build
4. **robots.txt** — allow all, disallow /api
5. **Open Graph images** — create branded OG image for social sharing
6. **Schema markup** — Article schema on blog posts, Product schema on guides
7. **Page speed** — images via Next.js Image component, lazy loading

### next-sitemap setup

Install: `npm install next-sitemap`

Create `next-sitemap.config.js`:
```js
module.exports = {
  siteUrl: 'https://scottylight.com.au',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
}
```

Add to package.json scripts:
```json
"postbuild": "next-sitemap"
```

### Recommended Next.js SEO component pattern

For every page, use this pattern:
```jsx
<Head>
  <title>{pageTitle} | Scotty Light</title>
  <meta name="description" content={metaDescription} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={metaDescription} />
  <meta property="og:image" content="https://scottylight.com.au/og/page-name.jpg" />
  <meta property="og:url" content={canonicalUrl} />
  <link rel="canonical" href={canonicalUrl} />
</Head>
```

---

## Internal Linking Strategy

### Hub-and-spoke model

Each main section is a hub. Articles are spokes that link back to the hub and to each other.

**Airbnb Lighting Hub** (`/airbnb-lighting`)
↓ spokes:
- `/airbnb-lighting/mood-lighting`
- `/airbnb-lighting/bedroom-lighting`
- `/airbnb-lighting/bathroom-lighting`
- `/airbnb-lighting/outdoor-lighting`
- `/airbnb-lighting/smart-lighting-airbnb`

Each spoke links to:
- The hub (Airbnb Lighting)
- 1-2 related product guides
- 1 related Learn article

**Learn Lighting Hub** (`/learn-lighting`)
↓ spokes:
- `/learn-lighting/2700k-vs-3000k`
- `/learn-lighting/how-to-layer-lighting`
- `/learn-lighting/why-downlights-feel-harsh`
- `/learn-lighting/lighting-mistakes`
- `/learn-lighting/lighting-psychology`

---

## Pinterest SEO Strategy

Pinterest is a major traffic driver for lighting and interiors content.

### Setup
- Create Scotty Light Pinterest business account
- Verify website
- Enable Rich Pins for articles

### Pin strategy
- Create 3-5 pins per article (different images, same URL)
- Pin to relevant boards: "Airbnb Lighting", "Warm Home Lighting", "Japandi Interiors", etc.
- Include keyword-rich pin descriptions
- Repin older content to fresh boards monthly

### Board structure
1. Airbnb Lighting Ideas
2. Warm Home Lighting Australia
3. Japandi & Earthy Interiors
4. Bedroom Lighting Inspiration
5. Outdoor Lighting Ideas
6. Hotel Style Bathrooms
7. Scotty Light — Latest Articles

---

## Content Voice Guide (Claude Prompt Framework)

Use this system prompt for all Scotty Light content:

```
You are writing for Scotty Light, an Australian lighting inspiration and product review website.

The author is Scott: a licensed electrician, lighting designer, Airbnb host (4.98 rating, 226 reviews), 
and design enthusiast based on the Gold Coast.

Voice: Warm, direct, knowledgeable. Like a trusted friend who happens to be an electrician 
and design obsessive. Not corporate, not academic. Conversational but credible.

Style rules:
- Write in second person ("you", "your home") 
- Use specific numbers and details rather than vague claims
- Reference real installation experience where relevant
- Always lead with the problem the reader has, then solve it
- Include practical "what to do" not just "why it matters"
- Australian English (metre not meter, colour not color)
- Keep paragraphs short — 3 sentences max
- Use subheadings every 300-400 words
- End articles with a clear recommendation or next step

Affiliate note: When recommending products, be honest about limitations as well as strengths. 
Trust is the product. Never recommend something you wouldn't install yourself.
```

---

## Affiliate Funnel Map

### Entry points → Content → Conversion

**Path 1: Airbnb Host**
Google search "airbnb lighting tips"
→ Airbnb Mood Lighting article
→ Internal link to "Best Smart Bulbs for Airbnb"
→ Product guide with affiliate links (Amazon, Commission Factory)
→ Email signup (Airbnb Lighting Checklist)
→ Email sequence → Prompt Pack upsell ($29)

**Path 2: Homeowner Renovating**
Pinterest pin "warm living room lighting ideas"
→ Shop The Look: Warm Earthy Living Room
→ Clicks product → Commission Factory (Temple & Webster / Beacon)
→ Related article "How To Layer Lighting"
→ Email signup
→ Email sequence → Lighting Consultation upsell

**Path 3: New Home Builder**
Google "2700k vs 3000k australia"
→ Educational article
→ Internal link to product guides
→ Affiliate click (Amazon/Beacon)
→ Email signup (Warm Home Lighting Guide)

---

## Email Sequence (Post-Signup)

### Airbnb Lighting Checklist signup

**Email 1 (immediate):** Deliver checklist + welcome
**Email 2 (day 3):** "The single lighting change with the biggest impact on reviews"
**Email 3 (day 7):** Product recommendation — warm globe upgrade (affiliate)
**Email 4 (day 14):** Story — "What happened when I upgraded the lighting at The Sadhu Hut"
**Email 5 (day 21):** Soft pitch — Airbnb Prompt Pack ($29) "Since you're clearly serious about your hosting..."
**Email 6 (day 30):** "6 months later — my review score after the lighting upgrade"
→ Ongoing: Weekly Scotty Light letter

---

## Revenue Projections (Conservative)

| Month | Sessions | Affiliate Revenue | Email List | Digital Products |
|-------|----------|-------------------|------------|-----------------|
| 1 | 200 | $0 | 40 | $0 |
| 2 | 500 | $20 | 100 | $0 |
| 3 | 1,000 | $60 | 180 | $58 |
| 4 | 2,000 | $150 | 280 | $87 |
| 5 | 3,500 | $280 | 400 | $145 |
| 6 | 5,000 | $450 | 550 | $290 |

Month 6 total: ~$740/month
Month 12 target: $2,000-4,000/month (with consistent content output)
