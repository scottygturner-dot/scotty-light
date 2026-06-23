import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import styles from './index.module.css'

const featuredArticles = [
  {
    slug: '/learn-lighting/how-to-layer-lighting',
    category: 'Education',
    title: 'How To Layer Lighting Like a Designer',
    excerpt: 'Most homes rely on a single overhead light. Here\'s why that kills the mood — and the three-layer system that fixes it.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    slug: '/airbnb-lighting',
    category: 'Airbnb',
    title: 'The Lighting Upgrade That Gets You 5-Star Reviews',
    excerpt: 'Guests don\'t consciously notice great lighting. But they feel it — and they write about it. Here\'s what to change first.',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
  },
  {
    slug: '/learn-lighting/2700k-vs-3000k',
    category: 'Education',
    title: '2700K vs 3000K: Which Warm White Is Right?',
    excerpt: 'The difference sounds tiny. The visual result is not. A licensed electrician explains colour temperature in plain language.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80',
  },
]

const shopLooks = [
  {
    slug: '/shop-the-look/warm-earthy-bedroom',
    title: 'Warm Earthy Bedroom',
    style: 'Japandi · Natural',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
    products: 4,
  },
  {
    slug: '/shop-the-look/coastal-airbnb-retreat',
    title: 'Coastal Airbnb Retreat',
    style: 'Coastal · Relaxed',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80',
    products: 6,
  },
  {
    slug: '/shop-the-look/boutique-hotel-bathroom',
    title: 'Boutique Hotel Bathroom',
    style: 'Luxe · Minimal',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    products: 3,
  },
  {
    slug: '/shop-the-look/modern-outdoor-entry',
    title: 'Modern Outdoor Entry',
    style: 'Architectural · Bold',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    products: 5,
  },
]

const quickLinks = [
  { href: '/product-guides/best-warm-led-strip-lights', label: 'Best LED Strip Lights' },
  { href: '/product-guides/best-bedside-lamps', label: 'Best Bedside Lamps' },
  { href: '/product-guides/best-smart-bulbs', label: 'Best Smart Bulbs AU' },
  { href: '/product-guides/best-dimmers', label: 'Best Dimmers' },
  { href: '/product-guides/best-outdoor-uplights', label: 'Best Outdoor Uplights' },
  { href: '/learn-lighting/lighting-mistakes', label: 'Lighting Mistakes to Avoid' },
]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Scotty Light — Lighting Inspiration for Australian Homes</title>
        <meta name="description" content="Warm, architectural lighting ideas for Australian homeowners, renovators and Airbnb hosts. Product guides, room inspiration and expert advice from a licensed electrician." />
        <meta property="og:title" content="Scotty Light — Light. Mood. Space." />
        <meta property="og:description" content="Australia's lighting inspiration platform. Beautiful rooms, honest product guides, and the electrician's perspective on getting light right." />
      </Head>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className="subheading mb-2">Light · Mood · Space</p>
            <h1 className={`display ${styles.heroTitle}`}>
              Great lighting doesn't<br />
              <em>brighten a room.</em><br />
              It transforms it.
            </h1>
            <p className={`body-lg ${styles.heroSub}`}>
              Lighting ideas, honest product guides and room inspiration
              for Australian homeowners, renovators and Airbnb hosts —
              from a licensed electrician who actually cares about atmosphere.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/airbnb-lighting" className="btn btn-primary">
                Airbnb Lighting Guide →
              </Link>
              <Link href="/learn-lighting" className="btn btn-ghost">
                Learn The Basics
              </Link>
            </div>
            <p className={styles.heroNote}>
              ✦ Built on the Gold Coast · No ads · Honest reviews
            </p>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImageInner}>
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=85"
                alt="Warm atmospheric living room lighting"
              />
              <div className={styles.heroImageBadge}>
                <span className={styles.badgeDot} />
                <span>Warm. Architectural. Considered.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS BAR ───────────────────────────────── */}
      <section className={styles.quickBar}>
        <div className={styles.quickBarInner}>
          <span className={styles.quickLabel}>Popular guides →</span>
          <div className={styles.quickLinks}>
            {quickLinks.map(l => (
              <Link key={l.href} href={l.href} className={styles.quickLink}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLES ─────────────────────────────── */}
      <section className={`${styles.articles} section`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className="subheading mb-1">From The Journal</p>
              <h2 className="display-sm">Light like you mean it.</h2>
            </div>
            <Link href="/ideas" className="btn btn-ghost">
              All articles →
            </Link>
          </div>

          <div className={styles.articleGrid}>
            {/* Feature card */}
            <Link href={featuredArticles[0].slug} className={`${styles.articleCard} ${styles.articleFeature} card`}>
              <div className={styles.articleImg}>
                <img src={featuredArticles[0].image} alt={featuredArticles[0].title} />
                <span className={`tag ${styles.articleTag}`}>{featuredArticles[0].category}</span>
              </div>
              <div className={styles.articleBody}>
                <h3 className="heading">{featuredArticles[0].title}</h3>
                <p className={`body ${styles.articleExcerpt}`}>{featuredArticles[0].excerpt}</p>
                <p className={`caption ${styles.articleMeta}`}>{featuredArticles[0].readTime}</p>
              </div>
            </Link>

            {/* Secondary cards */}
            <div className={styles.articleSecondary}>
              {featuredArticles.slice(1).map(a => (
                <Link key={a.slug} href={a.slug} className={`${styles.articleCard} ${styles.articleSmall} card`}>
                  <div className={styles.articleImgSm}>
                    <img src={a.image} alt={a.title} />
                  </div>
                  <div className={styles.articleBodySm}>
                    <span className={`tag`}>{a.category}</span>
                    <h3 className={styles.articleTitleSm}>{a.title}</h3>
                    <p className={`caption`}>{a.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AIRBNB CALLOUT ────────────────────────────────── */}
      <section className={styles.airbnbBand}>
        <div className={styles.airbnbInner}>
          <div className={styles.airbnbContent}>
            <p className="subheading mb-2" style={{color: 'var(--accent-light)'}}>For Airbnb Hosts</p>
            <h2 className={`display-sm ${styles.airbnbTitle}`}>
              The right lighting adds a full star to your reviews.
            </h2>
            <p className={`body-lg ${styles.airbnbSub}`}>
              I host on Airbnb and I've installed lighting in dozens of short-stay properties.
              This section is everything I know about making guests feel something the moment they walk in.
            </p>
            <Link href="/airbnb-lighting" className="btn btn-primary">
              Explore Airbnb Lighting →
            </Link>
          </div>
          <div className={styles.airbnbStats}>
            {[
              { num: '4.98★', label: 'My Airbnb rating' },
              { num: '226+', label: 'Guest reviews' },
              { num: '15yrs', label: 'Electrical experience' },
            ].map(s => (
              <div key={s.num} className={styles.airbnbStat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOP THE LOOK ─────────────────────────────────── */}
      <section className={`${styles.shopSection} section`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className="subheading mb-1">Shop The Look</p>
              <h2 className="display-sm">Room by room.</h2>
            </div>
            <Link href="/shop-the-look" className="btn btn-ghost">
              All rooms →
            </Link>
          </div>
          <div className={styles.shopGrid}>
            {shopLooks.map(look => (
              <Link key={look.slug} href={look.slug} className={`${styles.shopCard} card`}>
                <div className={styles.shopImg}>
                  <img src={look.image} alt={look.title} />
                  <div className={styles.shopOverlay}>
                    <span className={styles.shopBtn}>Shop This Look →</span>
                  </div>
                </div>
                <div className={styles.shopBody}>
                  <p className="caption">{look.style}</p>
                  <h3 className={styles.shopTitle}>{look.title}</h3>
                  <p className="caption">{look.products} products →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER VOICE ─────────────────────────────────── */}
      <section className={`${styles.founder} section`}>
        <div className={`container ${styles.founderInner}`}>
          <div className={styles.founderQuote}>
            <span className={styles.quoteOpen}>"</span>
            <p className={`${styles.quoteText} display-sm`}>
              Most people fix everything in a renovation except the lighting.
              Then they wonder why the room still doesn't feel right.
            </p>
            <div className={styles.quoteAttrib}>
              <div className={styles.quoteAvatar}>S</div>
              <div>
                <p className={styles.quoteName}>Scott</p>
                <p className="caption">Electrician · Designer · Airbnb Host · Gold Coast</p>
              </div>
            </div>
          </div>
          <div className={styles.founderCredentials}>
            <p className="subheading mb-3">Why trust Scotty Light?</p>
            {[
              ['⚡', 'Licensed Electrician', 'I\'ve wired hundreds of homes and know what actually works on the wall.'],
              ['🏡', 'Airbnb Host', '4.98 stars, 226+ reviews. Lighting is the first upgrade I made.'],
              ['🎨', 'Design Enthusiast', 'I follow architectural and interior design closely and obsessively.'],
              ['🔦', 'Real-World Tester', 'Every product I recommend I\'ve used or installed myself.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className={styles.credential}>
                <span className={styles.credIcon}>{icon}</span>
                <div>
                  <p className={styles.credTitle}>{title}</p>
                  <p className="caption">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────── */}
      <section className={`${styles.newsletter} section-sm`}>
        <div className="container">
          <div className={styles.newsletterBox}>
            <div className={styles.newsletterContent}>
              <p className="subheading mb-1">The Scotty Light Letter</p>
              <h2 className="heading mb-2">One lighting idea. Once a week.</h2>
              <p className="body text-mid">
                No fluff. Just one practical lighting insight, product recommendation, or
                room inspiration delivered to your inbox every week.
              </p>
            </div>
            <form className={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com.au"
                className={styles.emailInput}
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe Free
              </button>
              <p className="affiliate-note" style={{marginTop: '0.5rem'}}>
                No spam. Unsubscribe any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
