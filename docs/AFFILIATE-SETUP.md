# Scotty Light — Affiliate Setup Guide

## Overview

Two networks cover 90% of what you need:

| Network | Best For | Commission | Payment |
|---|---|---|---|
| Commission Factory | Beacon Lighting, Temple & Webster, AU brands | 4–12% | Monthly |
| Amazon Associates AU | Govee, Philips Hue, everything else | 3–5% | Monthly |

Set up both. Use Commission Factory for Australian retailers first,
Amazon as the fallback for anything not on Commission Factory.

---

## PART 1 — Commission Factory

### Step 1: Sign Up

1. Go to **commissionfactory.com**
2. Click **"Join as a Publisher"**
3. Fill in your details:
   - Website URL: your Replit URL for now (update later with real domain)
   - Website category: **Shopping / Home & Garden**
   - Describe your site: *"Lighting inspiration and product review website for Australian homeowners, renovators and Airbnb hosts. Content includes buying guides, room inspiration and educational articles."*
4. Submit — approval usually takes 1-3 business days

### Step 2: Apply to These Brands (Priority Order)

Once approved, go to **Advertisers** and apply to each:

**Tier 1 — Apply immediately:**
- [ ] Beacon Lighting (lighting specialist — perfect match)
- [ ] Temple & Webster (homewares — bedside lamps, décor)
- [ ] Adairs (bedding, lamps, home décor)
- [ ] Lighting Collective (premium lighting)
- [ ] Interior Secrets (furniture and lighting)

**Tier 2 — Apply in week 2:**
- [ ] Bunnings (hardware — general home)
- [ ] Harvey Norman (electronics, smart home)
- [ ] JB Hi-Fi (Philips Hue, smart lighting)
- [ ] IKEA Australia (lamps, lighting basics)
- [ ] Catch.com.au (general — good fallback)

### Step 3: Get Your Links

Once a brand approves you (usually 1-7 days):

1. Go to **Links & Creatives** in your Commission Factory dashboard
2. For each brand, find the product you want to link to
3. Click **"Generate Link"**
4. Copy the tracking URL — it looks like:
   `https://www.commissionfactory.com/t/xxx?url=https://beaconlighting.com.au/product/...`
5. Paste this as the `href` in your product cards

### Step 4: Add to Your Site

In your product guide files, replace `href="#"` with your tracking link:

```jsx
// BEFORE
<a href="#" ...>View at Beacon →</a>

// AFTER  
<a href="https://www.commissionfactory.com/t/YOUR_ID?url=https://beaconlighting.com.au/..." ...>
  View at Beacon →
</a>
```

Always keep `rel="noopener noreferrer sponsored"` on all affiliate links.

---

## PART 2 — Amazon Associates Australia

### Step 1: Sign Up

1. Go to **affiliate-program.amazon.com.au**
2. Click **"Join Now for Free"**
3. Sign in with your existing Amazon account (or create one)
4. Fill in:
   - Website: your Replit URL
   - What does your website do: *"Australian lighting inspiration and product review site. I write buying guides and product recommendations for homeowners and Airbnb hosts."*
   - How do you drive traffic: *"SEO content, social media (Pinterest, Instagram)"*

**Important:** Amazon requires you to make at least 3 qualifying sales within 180 days of joining, otherwise they close your account. So don't sign up until your site has some content live — which it now does.

### Step 2: Your Associate ID

Once approved you'll get an Associate ID like: `scottylight-22`

This gets added to any Amazon AU product URL like:
`https://www.amazon.com.au/dp/PRODUCT-ID/?tag=scottylight-22`

### Step 3: Build Links with SiteStripe

Amazon installs a toolbar called SiteStripe on Amazon.com.au when you're logged in as an Associate.

1. Log in to your Amazon account
2. Browse to any product (e.g. search "Govee LED strip lights warm white")
3. The SiteStripe bar appears at the top of the page
4. Click **"Text"** to get your affiliate link
5. Copy and paste into your site

### Step 4: Products to Link First

Search Amazon AU for these and grab your affiliate links:

**LED Strips:**
- Govee LED Strip Lights Warm White 2700K
- Lepro LED Strip Lights Warm White
- Philips Hue Lightstrip Plus

**Smart Bulbs:**
- Philips Hue White Ambiance E27
- LIFX Mini White to Warm
- Govee Smart Bulbs

**Bedside Lamps:**
- Search "bedside table lamp warm white Australia"
- Pick 3-4 with good reviews and Prime delivery

---

## PART 3 — Add Links to Your Site

### The Pages to Update (Priority Order)

1. `/product-guides/best-warm-led-strip-lights` — 5 products need real links
2. `/airbnb-lighting/index.js` — 4 product cards in "Scotty's Picks"
3. `/airbnb-lighting/mood-lighting` — sidebar products
4. `/shop-the-look` pages — as you build them

### Link Template for Product Cards

```jsx
<a
  href="YOUR_AFFILIATE_LINK_HERE"
  className="btn btn-outline"
  target="_blank"
  rel="noopener noreferrer sponsored"
>
  View at Beacon Lighting →
</a>
```

### Affiliate Disclosure (Already on Site)

Your site already has the disclosure in the footer:
*"Some links on this site are affiliate links. We may earn a commission at no extra cost to you."*

This satisfies ACCC requirements in Australia and Amazon/Commission Factory terms.
You're covered.

---

## PART 4 — Google Search Console

Do this the same day as affiliate setup.

### Step 1: Add Your Site

1. Go to **search.google.com/search-console**
2. Click **"Add Property"**
3. Choose **URL prefix**
4. Enter your site URL (Replit URL for now)
5. Verify ownership — easiest method is **HTML tag**:
   - Google gives you a `<meta>` tag like:
     `<meta name="google-site-verification" content="xxxxx" />`
   - Add this to your `pages/_document.js` inside the `<Head>` tag
   - Deploy, then click Verify in Search Console

### Step 2: Submit Sitemap

1. In Search Console, go to **Sitemaps**
2. Enter: `sitemap.xml`
3. Click Submit

*Note: You'll need to install `next-sitemap` first (see REPLIT-DEPLOY.md)*

### Step 3: Check Indexing

After a few days, go to **URL Inspection** and paste in:
- Your homepage URL
- Your Airbnb Lighting page URL
- Your first article URL

Google will tell you if it's indexed and flag any issues.

---

## PART 5 — Pinterest (Week 2)

Pinterest is the second-best free traffic source for lighting content after Google.

### Setup
1. Create a **Pinterest Business account** at pinterest.com.au/business
2. Claim your website (Pinterest guides you through this)
3. Enable **Rich Pins** for articles

### Boards to Create
1. Airbnb Lighting Ideas
2. Warm Home Lighting Australia
3. LED Strip Light Ideas
4. Japandi & Earthy Interiors
5. Bedroom Lighting Inspiration
6. Scotty Light — Latest Articles

### First Pins
Create 3 pins for your Airbnb Mood Lighting article:
- Different images, same URL
- Keyword-rich description:
  *"Airbnb lighting tips from a 4.98-rated host and electrician. How warm lighting drives 5-star reviews. #AirbnbLighting #WarmLighting #AirbnbHost #LightingIdeas"*

---

## Summary Checklist

**Week 1:**
- [ ] Sign up to Commission Factory
- [ ] Apply to Beacon Lighting, Temple & Webster, Adairs
- [ ] Sign up to Amazon Associates AU
- [ ] Get Govee + Philips Hue affiliate links from Amazon
- [ ] Update all `href="#"` in product guides with real links
- [ ] Set up Google Search Console
- [ ] Submit sitemap

**Week 2:**
- [ ] Apply to Tier 2 Commission Factory brands
- [ ] Set up Pinterest business account
- [ ] Create first 5 Pinterest boards
- [ ] Pin 3 versions of your Airbnb Mood Lighting article
- [ ] Write your second article (2700K vs 3000K)

**Week 3-4:**
- [ ] Write Best Bedside Lamps product guide
- [ ] Write How To Layer Lighting article
- [ ] Add Shop The Look: Coastal Airbnb Retreat page
- [ ] First email to your list (if you have subscribers)
