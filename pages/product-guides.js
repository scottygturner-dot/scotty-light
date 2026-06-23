import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import styles from './guides.module.css'

const guides = [
  {
    slug: 'best-warm-led-strip-lights',
    title: 'Best Warm LED Strip Lights in Australia',
    excerpt: 'Tested across multiple installs. These are the strips that actually deliver warm, consistent light without hotspots or colour drift.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80',
    category: 'LED Strips',
    picks: 5,
    featured: true,
  },
  {
    slug: 'best-bedside-lamps',
    title: 'Best Bedside Lamps Australia (2025)',
    excerpt: 'Warm, dimmable, and good looking. The bedside lamps worth buying for your home or Airbnb — and where to get them in Australia.',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80',
    category: 'Lamps',
    picks: 6,
  },
  {
    slug: 'best-smart-bulbs',
    title: 'Best Smart Bulbs Australia — Hue vs LIFX vs Govee',
    excerpt: 'Which smart globe system is actually worth it for Australian homes? A practical comparison with pricing in AUD.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    category: 'Smart Lighting',
    picks: 4,
  },
  {
    slug: 'best-dimmers',
    title: 'Best Dimmer Switches Australia (LED Compatible)',
    excerpt: 'Not all dimmers work with LED globes. These are the ones that do — and how to choose the right one for your setup.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80',
    category: 'Dimmers',
    picks: 4,
  },
  {
    slug: 'best-outdoor-uplights',
    title: 'Best Outdoor Uplights for Australian Gardens',
    excerpt: 'Garden uplighting transforms a property at night. These are the IP-rated options that look great and survive the elements.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    category: 'Outdoor',
    picks: 5,
  },
  {
    slug: 'best-led-diffusers',
    title: 'Best LED Diffuser Profiles for Cove Lighting',
    excerpt: 'The difference between amateur and professional LED strip installs is the diffuser profile. Here\'s what to use and where to buy it.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80',
    category: 'LED Strips',
    picks: 3,
  },
]

const categories = ['All', 'LED Strips', 'Lamps', 'Smart Lighting', 'Dimmers', 'Outdoor']

export default function ProductGuides() {
  return (
    <Layout>
      <Head>
        <title>Lighting Product Guides Australia — Honest Reviews | Scotty Light</title>
        <meta name="description" content="Honest lighting product guides for Australian homes. LED strip lights, bedside lamps, smart bulbs, dimmers and outdoor lighting — tested and reviewed by a licensed electrician." />
      </Head>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <p className="subheading mb-2">Product Guides</p>
          <h1 className={`display ${styles.heroTitle}`}>
            Honest reviews.<br />
            <em>From someone who installs this stuff.</em>
          </h1>
          <p className={`body-lg text-mid ${styles.heroSub}`}>
            Every guide is written from the perspective of a licensed electrician
            who has installed these products in real homes and Airbnbs.
            No paid placements. No fluff.
          </p>
        </div>
      </section>

      {/* GUIDES */}
      <section className="section">
        <div className="container">

          {/* Featured */}
          <Link href={`/product-guides/${guides[0].slug}`} className={`${styles.featured} card`}>
            <div className={styles.featuredImg}>
              <img src={guides[0].image} alt={guides[0].title} />
              <span className={styles.featuredBadge}>Featured Guide</span>
            </div>
            <div className={styles.featuredBody}>
              <span className="tag">{guides[0].category}</span>
              <h2 className={`heading mt-2 ${styles.featuredTitle}`}>{guides[0].title}</h2>
              <p className={`body text-mid mt-2`}>{guides[0].excerpt}</p>
              <p className="caption mt-3">{guides[0].picks} products reviewed →</p>
            </div>
          </Link>

          {/* Grid */}
          <div className={styles.grid}>
            {guides.slice(1).map(g => (
              <Link key={g.slug} href={`/product-guides/${g.slug}`} className={`${styles.card} card`}>
                <div className={styles.imgWrap}>
                  <img src={g.image} alt={g.title} />
                </div>
                <div className={styles.body}>
                  <span className="tag">{g.category}</span>
                  <h3 className={styles.title}>{g.title}</h3>
                  <p className={`body text-mid ${styles.excerpt}`}>{g.excerpt}</p>
                  <p className="caption mt-2">{g.picks} products reviewed →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AFFILIATE NOTE */}
      <section className={styles.disclosure}>
        <div className="container text-center">
          <p className="affiliate-note">
            ✦ Scotty Light uses affiliate links. When you buy through our links we may earn a commission — at no extra cost to you.
            We only recommend products we've personally used or installed. Our editorial independence is non-negotiable.
          </p>
        </div>
      </section>
    </Layout>
  )
}
