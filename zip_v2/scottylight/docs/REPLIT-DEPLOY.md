# Scotty Light — Replit Deployment Guide

## Step 1: Create Replit Project

1. Go to replit.com → Create Repl
2. Choose template: **Next.js**
3. Name it: `scotty-light`

---

## Step 2: Upload Files

Upload the entire `scottylight/` folder contents to your Replit project.

File structure should look like:
```
/
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   ├── index.module.css
│   └── airbnb-lighting/
│       ├── index.js
│       └── airbnb.module.css
├── components/
│   └── layout/
│       ├── Nav.js
│       ├── Nav.module.css
│       ├── Footer.js
│       ├── Footer.module.css
│       ├── Layout.js
│       └── Layout.module.css
├── styles/
│   └── globals.css
├── next.config.js
└── package.json
```

---

## Step 3: Install Dependencies

In the Replit Shell tab, run:
```bash
npm install
```

---

## Step 4: Run Dev Server

In the Replit Shell:
```bash
npm run dev
```

Your site will be live at the Replit preview URL.

---

## Step 5: Set Up Custom Domain (Optional)

In Replit:
1. Go to your Repl settings
2. Find "Custom Domain"
3. Enter: `scottylight.com.au`
4. Follow DNS instructions

---

## Step 6: Install SEO Package

```bash
npm install next-sitemap
```

Create `next-sitemap.config.js` in root:
```js
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://scottylight.com.au',
  generateRobotsTxt: true,
}
```

Update `package.json` scripts:
```json
"postbuild": "next-sitemap"
```

---

## Step 7: Add Environment Variables

In Replit Secrets tab, add:
```
SITE_URL=https://scottylight.com.au
```

---

## Pages to Build Next (Priority Order)

1. `/learn-lighting/2700k-vs-3000k` — first article, low competition keyword
2. `/airbnb-lighting/mood-lighting` — first full guide
3. `/product-guides/best-warm-led-strip-lights` — first affiliate page
4. `/about` — credibility page
5. `/shop-the-look/warm-earthy-bedroom` — first curated room

---

## Affiliate Link Setup

### Commission Factory
1. Sign up at commissionfactory.com as publisher
2. Apply to: Beacon Lighting, Temple & Webster, Adairs
3. Replace `href="#"` in product cards with your tracking links
4. Add `rel="sponsored noopener noreferrer"` to all affiliate links

### Amazon Associates AU
1. Sign up at affiliate-program.amazon.com.au
2. Build links via SiteStripe toolbar when browsing Amazon
3. Replace `href="#"` in product sections with your Amazon tracking links

---

## Analytics Setup

Add Google Analytics 4 to `pages/_app.js`:

```jsx
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
```

Replace `G-XXXXXXXXXX` with your GA4 measurement ID.

---

## Email List Setup (Free)

Recommended: **Mailchimp** (free up to 500 subscribers)

1. Create Mailchimp account
2. Create an audience
3. Get your embedded form action URL
4. Replace the newsletter form `onSubmit` handler with Mailchimp fetch call:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  const email = e.target.email.value
  // Add Mailchimp API call here
  alert('Thanks! Check your email.')
}
```

Alternative: **ConvertKit** (free up to 1,000 subscribers, better automations)

---

## Build for Production

```bash
npm run build
npm start
```

---

## Troubleshooting Common Replit Issues

**Issue: Port not showing preview**
Solution: Make sure `package.json` has `"dev": "next dev"` and Replit's run command is `npm run dev`

**Issue: Fonts not loading**
Solution: Google Fonts is loaded in `_document.js`. Check internet connection in Repl.

**Issue: Images not loading**
Solution: External images (Unsplash) need to be in `next.config.js` domains array — already configured.

**Issue: CSS not applying**
Solution: Check `_app.js` imports `../styles/globals.css`
