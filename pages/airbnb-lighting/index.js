import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import styles from './airbnb.module.css'

const guides = [
  {
    slug: 'mood-lighting',
    category: 'Strategy',
    title: 'Airbnb Mood Lighting: How Lighting Drives 5-Star Reviews',
    excerpt: 'Guests don\'t consciously notice lighting. They just feel comfortable, relaxed, and at home. Or they don\'t. Here\'s what the science — and my 226 reviews — says.',
    image: '/images/sadhu-living.jpg',
    readTime: '9 min',
    featured: true,
  },
  {
    slug: 'bedroom-lighting',
    category: 'Room Guide',
    title: 'Airbnb Bedroom Lighting: The Setup That Gets You Mentioned in Reviews',
    excerpt: 'The bedroom is where guests spend the most time and form their strongest impressions. Get this room right and the review writes itself.',
    image: '/images/sadhu-bedroom.jpg',
    readTime: '7 min',
  },
  {
    slug: 'bathroom-lighting',
    category: 'Room Guide',
    title: 'Airbnb Bathroom Lighting: Why It Matters More Than You Think',
    excerpt: 'Guests judge a property\'s quality most harshly in the bathroom. Harsh lighting makes everything feel cheap. Warm lighting makes it feel like a boutique hotel.',
    image: '/images/sadhu-shower.jpg',
    readTime: '6 min',
  },
  {
    slug: 'outdoor-lighting',
    category: 'Room Guide',
    title: 'Airbnb Outdoor & Entry Lighting: The First Impression That Sets the Tone',
    excerpt: 'Guests form a judgment about your property in the first 30 seconds. The right outdoor lighting sets the mood before they\'ve even opened the door.',
    image: '/images/sadhu-entry.jpg',
    readTime: '5 min',
  },
  {
    slug: 'smart-lighting-airbnb',
    category: 'Product Guide',
    title: 'Best Smart Lighting for Airbnb: Automations That Impress Guests',
    excerpt: 'Motion-activated pathway lighting. Warm welcome scenes. The right smart lighting automations can make a mid-range property feel premium.',
    image: '/images/sadhu-dining.jpg',
    readTime: '8 min',
  },
  {
    slug: 'bedside-lighting-airbnb',
    category: 'Product Guide',
    title: 'Best Bedside Lighting for Airbnb: What Actually Works',
    excerpt: 'Tested across multiple properties. These are the bedside lamps that get mentioned in reviews, survive guest handling, and ship to Australia.',
    image: '/images/sadhu-bedside.jpg',
    readTime: '6 min',
  },
]

const products = [
  {
    name: 'Beacon Lighting — Warm LED Globes',
    use: 'Bedrooms & Living',
    why: 'My go-to for 2700K globe replacements. Consistent colour, wide dimmer compatibility.',
    cta: 'View at Beacon →',
    href: '#',
    badge: 'Best Overall',
  },
  {
    name: 'Temple & Webster — Bedside Lamps',
    use: 'Bedside',
    why: 'Wide range of warm, design-forward options. Reliable shipping, great price points.',
    cta: 'View at T&W →',
    href: '#',
    badge: 'Best Value',
  },
  {
    name: 'Govee LED Strip Lights',
    use: 'Under-cabinet / Cove lighting',
    why: 'App-controlled, warm white mode looks great. Easy guest-proof setup behind furniture.',
    cta: 'View on Amazon AU →',
    href: '#',
    badge: 'Most Popular',
  },
  {
    name: 'Philips Hue Starter Kit',
    use: 'Smart scenes & automation',
    why: 'Set a warm welcome scene to trigger on check-in. Worth it for premium properties.',
    cta: 'View on Amazon AU →',
    href: '#',
    badge: 'Premium Pick',
  },
]

const tips = [
  {
    num: '01',
    title: 'Remove every cool-white globe',
    desc: 'Any globe above 3000K will make your property feel clinical. Replace with 2700K warm white throughout. This single change is worth 0.2 stars on its own.',
  },
  {
    num: '02',
    title: 'Add a bedside lamp on each side',
    desc: 'Overhead-only bedrooms feel like hotel rooms from the 1990s. Bedside lamps at warm colour temperature are the most-mentioned lighting detail in 5-star reviews.',
  },
  {
    num: '03',
    title: 'Light the outdoor entry',
    desc: 'Path lighting and a warm entry light create the first impression. Guests who arrive at night to a well-lit entry already feel good about your property before they\'re inside.',
  },
  {
    num: '04',
    title: 'Add dimmers to the living room',
    desc: 'Guests can\'t relax under bright overhead light. A dimmer lets them control atmosphere. It costs $40 and takes an electrician 30 minutes.',
  },
  {
    num: '05',
    title: 'Light the bathroom warmly',
    desc: 'Replace harsh cool bathroom lights with warm 2700K. Suddenly the bathroom feels like a spa. Your bathroom photos will also look dramatically better.',
  },
  {
    num: '06',
    title: 'Layer — don\'t just brighten',
    desc: 'Don\'t just add more light. Add different sources at different heights. Floor lamp + bedside lamp + pendant = atmosphere. One downlight = hospital waiting room.',
  },
]

export default function AirbnbLighting() {
  return (
    <Layout>
      <Head>
        <title>Airbnb Lighting Guide — How Lighting Gets You 5-Star Reviews | Scotty Light</title>
        <meta name="description" content="Lighting advice specifically for Airbnb hosts. Room-by-room guides, product recommendations and the strategy behind 5-star reviews — from a host with a 4.98 rating and 226 reviews." />
        <meta property="og:title" content="Airbnb Lighting Guide | Scotty Light" />
        <meta property="og:description" content="From a 4.98-rated Airbnb host and licensed electrician: the lighting changes that get you mentioned in guest reviews." />
      </Head>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeIcon}>★</span>
            <span>From a 4.98-rated host · 226 reviews · Licensed electrician</span>
          </div>
          <h1 className={`display ${styles.heroTitle}`}>
            The right lighting adds<br />
            <em>a full star to your reviews.</em>
          </h1>
          <p className={`body-lg ${styles.heroSub}`}>
            I host on Airbnb. I'm also a licensed electrician who's installed lighting in dozens
            of short-stay properties. This section is everything I know about making guests
            feel something the moment they walk through the door.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/airbnb-lighting/mood-lighting" className="btn btn-primary">
              Read: Airbnb Mood Lighting →
            </Link>
            <Link href="#quick-wins" className="btn btn-outline">
              6 Quick Wins
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/images/sadhu-living.jpg"
            alt="Warm Airbnb bedroom lighting"
          />
          <div className={styles.heroReview}>
            <p className={styles.reviewStars}>★★★★★</p>
            <p className={styles.reviewText}>
              "The lighting in this place is something else. Every room felt like a boutique hotel."
            </p>
            <p className={styles.reviewAttrib}>— Recent guest review</p>
          </div>
        </div>
      </section>

      {/* ── QUICK WINS ──────────────────────────────────── */}
      <section className={styles.quickWins} id="quick-wins">
        <div className="container">
          <div className="text-center mb-4">
            <p className="subheading mb-1">Start Here</p>
            <h2 className="display-sm">6 lighting changes that move the needle.</h2>
            <p className={`body-lg text-mid mt-2`} style={{maxWidth: '560px', margin: '1rem auto 0'}}>
              None of these require a renovation. Most cost under $200 total.
              All of them show up in guest reviews.
            </p>
          </div>
          <div className={styles.tipsGrid}>
            {tips.map(tip => (
              <div key={tip.num} className={styles.tipCard}>
                <span className={styles.tipNum}>{tip.num}</span>
                <h3 className={styles.tipTitle}>{tip.title}</h3>
                <p className="body text-mid">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUIDES ──────────────────────────────────────── */}
      <section className={`section ${styles.guides}`}>
        <div className="container">
          <p className="subheading mb-1">Airbnb Lighting Guides</p>
          <h2 className="display-sm mb-4">Room by room. Strategy first.</h2>

          {/* Featured */}
          <Link href={`/airbnb-lighting/${guides[0].slug}`} className={`${styles.featuredGuide} card`}>
            <div className={styles.featuredImg}>
              <img src={guides[0].image} alt={guides[0].title} />
            </div>
            <div className={styles.featuredBody}>
              <span className="tag">{guides[0].category}</span>
              <h3 className={`${styles.featuredTitle} heading mt-2`}>{guides[0].title}</h3>
              <p className={`body text-mid mt-2`}>{guides[0].excerpt}</p>
              <p className="caption mt-3">{guides[0].readTime} read →</p>
            </div>
          </Link>

          {/* Grid */}
          <div className={styles.guidesGrid}>
            {guides.slice(1).map(g => (
              <Link key={g.slug} href={`/airbnb-lighting/${g.slug}`} className={`${styles.guideCard} card`}>
                <div className={styles.guideImg}>
                  <img src={g.image} alt={g.title} />
                </div>
                <div className={styles.guideBody}>
                  <span className="tag">{g.category}</span>
                  <h3 className={styles.guideTitle}>{g.title}</h3>
                  <p className="body text-mid">{g.excerpt}</p>
                  <p className="caption mt-2">{g.readTime} read →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT PICKS ───────────────────────────────── */}
      <section className={`${styles.products} section`}>
        <div className="container">
          <p className="subheading mb-1">Scotty's Picks</p>
          <h2 className="display-sm mb-1">Products I actually use and recommend.</h2>
          <p className="body text-mid mb-4">
            Affiliate links below — I earn a small commission at no cost to you.
            I only recommend products I've tested in real properties.
          </p>
          <div className={styles.productGrid}>
            {products.map(p => (
              <div key={p.name} className={`${styles.productCard} card`}>
                <div className={styles.productTop}>
                  <span className={styles.productBadge}>{p.badge}</span>
                  <span className="caption">{p.use}</span>
                </div>
                <h3 className={styles.productName}>{p.name}</h3>
                <p className="body text-mid">{p.why}</p>
                <a href={p.href} className={`btn btn-outline ${styles.productCta}`} target="_blank" rel="noopener noreferrer sponsored">
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="affiliate-note mt-3 text-center">
            ✦ Affiliate disclosure: Scotty Light earns a commission on qualifying purchases. This never affects our recommendations.
          </p>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <div className="container text-center">
          <p className="subheading mb-2" style={{color:'var(--accent-light)'}}>Free Download</p>
          <h2 className={`display-sm ${styles.ctaTitle}`}>
            The Airbnb Lighting Checklist.
          </h2>
          <p className={`body-lg ${styles.ctaSub}`}>
            Every lighting change that's shown up in my 226 guest reviews, in a single printable checklist.
          </p>
          <form className={styles.ctaForm} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="your@email.com.au" className={styles.ctaInput} required />
            <button type="submit" className="btn btn-primary">Send Me The Checklist</button>
          </form>
          <p className="affiliate-note mt-2" style={{color:'rgba(240,235,227,0.4)'}}>No spam. Unsubscribe any time.</p>
        </div>
      </section>
    </Layout>
  )
}
