import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import styles from './learn.module.css'

const articles = [
  {
    slug: '2700k-vs-3000k',
    title: '2700K vs 3000K: Which Warm White Is Right for Your Home?',
    excerpt: 'The difference sounds tiny. The visual result is dramatic. A licensed electrician explains colour temperature in plain English.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=700&q=80',
    readTime: '5 min',
    difficulty: 'Beginner',
    featured: true,
  },
  {
    slug: 'how-to-layer-lighting',
    title: 'How To Layer Lighting Like an Interior Designer',
    excerpt: 'Most homes rely on one overhead light. Here\'s the three-layer system that transforms any room — and costs less than you think.',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80',
    readTime: '6 min',
    difficulty: 'Beginner',
  },
  {
    slug: 'why-downlights-feel-harsh',
    title: 'Why Downlights Feel Harsh (And What To Do About It)',
    excerpt: 'Downlights aren\'t the problem. The wrong downlights, in the wrong positions, at the wrong colour temperature — that\'s the problem.',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=700&q=80',
    readTime: '7 min',
    difficulty: 'Beginner',
  },
  {
    slug: 'lighting-mistakes',
    title: 'The 7 Lighting Mistakes Almost Every Homeowner Makes',
    excerpt: 'After wiring hundreds of homes, these are the mistakes I see over and over. All of them are fixable — most without an electrician.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80',
    readTime: '8 min',
    difficulty: 'Beginner',
  },
  {
    slug: 'how-hotels-use-lighting',
    title: 'How Hotels Use Lighting to Make You Feel Relaxed',
    excerpt: 'It\'s not an accident. Hotel lighting is engineered to create specific emotional responses. Here\'s how to replicate it at home.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80',
    readTime: '6 min',
    difficulty: 'Intermediate',
  },
  {
    slug: 'lighting-psychology',
    title: 'Lighting Psychology: How Light Affects Mood and Behaviour',
    excerpt: 'The science is clear — lighting has a measurable effect on stress, sleep, productivity and perceived space. Here\'s what the research says.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
    readTime: '9 min',
    difficulty: 'Intermediate',
  },
]

const concepts = [
  { icon: '🌡️', term: 'Colour Temperature', def: 'Measured in Kelvin (K). Lower = warmer. 2700K is candlelight. 6500K is daylight.' },
  { icon: '💡', term: 'CRI (Colour Rendering Index)', def: 'How accurately a light shows colours. 90+ CRI makes everything look better.' },
  { icon: '🔆', term: 'Lumens vs Watts', def: 'Lumens = brightness. Watts = energy used. Ignore watts, buy by lumens.' },
  { icon: '🎚️', term: 'Dimmer Compatibility', def: 'Not all dimmers work with all LEDs. Always check before buying.' },
  { icon: '📐', term: 'Layered Lighting', def: 'Ambient + task + accent. Three layers = atmosphere. One layer = flat.' },
  { icon: '🏠', term: 'IP Rating', def: 'How weatherproof a fitting is. IP44 minimum for bathrooms. IP65 for outdoors.' },
]

export default function LearnLighting() {
  return (
    <Layout>
      <Head>
        <title>Learn Lighting — Practical Guides for Australian Homes | Scotty Light</title>
        <meta name="description" content="Learn how lighting actually works. Colour temperature, layering, dimmer compatibility and more — explained by a licensed electrician in plain English." />
      </Head>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <p className="subheading mb-2">Learn Lighting</p>
          <h1 className={`display ${styles.heroTitle}`}>
            Everything you need to know.<br />
            <em>Nothing you don't.</em>
          </h1>
          <p className={`body-lg text-mid ${styles.heroSub}`}>
            Practical lighting knowledge from a licensed electrician.
            No jargon, no upsell — just what actually matters when you're
            choosing or installing lighting in an Australian home.
          </p>
        </div>
      </section>

      {/* QUICK CONCEPTS */}
      <section className={styles.concepts}>
        <div className="container">
          <p className="subheading mb-3">Key Concepts</p>
          <div className={styles.conceptGrid}>
            {concepts.map(c => (
              <div key={c.term} className={styles.concept}>
                <span className={styles.conceptIcon}>{c.icon}</span>
                <div>
                  <p className={styles.conceptTerm}>{c.term}</p>
                  <p className="caption">{c.def}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section">
        <div className="container">
          <p className="subheading mb-1">All Articles</p>
          <h2 className="display-sm mb-4">Start with the basics.</h2>

          {/* Featured */}
          <Link href={`/learn-lighting/${articles[0].slug}`} className={`${styles.featured} card`}>
            <div className={styles.featuredImg}>
              <img src={articles[0].image} alt={articles[0].title} />
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.meta}>
                <span className="tag">{articles[0].difficulty}</span>
                <span className="caption">{articles[0].readTime} read</span>
              </div>
              <h2 className={`heading mt-2 ${styles.featuredTitle}`}>{articles[0].title}</h2>
              <p className="body text-mid mt-2">{articles[0].excerpt}</p>
              <p className="caption mt-3" style={{color: 'var(--accent)'}}>Read article →</p>
            </div>
          </Link>

          {/* Grid */}
          <div className={styles.grid}>
            {articles.slice(1).map(a => (
              <Link key={a.slug} href={`/learn-lighting/${a.slug}`} className={`${styles.card} card`}>
                <div className={styles.imgWrap}>
                  <img src={a.image} alt={a.title} />
                </div>
                <div className={styles.body}>
                  <div className={styles.meta}>
                    <span className="tag">{a.difficulty}</span>
                    <span className="caption">{a.readTime}</span>
                  </div>
                  <h3 className={styles.title}>{a.title}</h3>
                  <p className={`body text-mid ${styles.excerpt}`}>{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
