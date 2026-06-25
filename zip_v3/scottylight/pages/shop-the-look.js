import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import styles from './shop.module.css'

const rooms = [
  {
    slug: 'warm-earthy-bedroom',
    title: 'Warm Earthy Bedroom',
    style: 'Japandi · Natural · Calm',
    description: 'Layered warm lighting, natural textures, and a 2700K palette that makes sleep feel inevitable.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
    products: 4,
    tag: 'Most Popular',
  },
  {
    slug: 'coastal-airbnb-retreat',
    title: 'Coastal Airbnb Retreat',
    style: 'Coastal · Relaxed · Airy',
    description: 'The lighting setup behind one of the Gold Coast\'s most-reviewed short-stay properties.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    products: 6,
    tag: 'Airbnb Pick',
  },
  {
    slug: 'boutique-hotel-bathroom',
    title: 'Boutique Hotel Bathroom',
    style: 'Luxe · Minimal · Warm',
    description: 'Replace harsh cool whites with warm layered light. The bathroom that makes guests feel like they\'re somewhere special.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    products: 3,
    tag: null,
  },
  {
    slug: 'modern-outdoor-entry',
    title: 'Modern Outdoor Entry',
    style: 'Architectural · Bold · Considered',
    description: 'First impressions are made before the door opens. This is the outdoor lighting setup that sets the tone.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    products: 5,
    tag: null,
  },
  {
    slug: 'japandi-living-room',
    title: 'Japandi Living Room',
    style: 'Japandi · Earthy · Serene',
    description: 'The living room that looks like a design magazine and feels like a deep exhale.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    products: 5,
    tag: 'New',
  },
  {
    slug: 'hampton-style-kitchen',
    title: 'Hamptons Style Kitchen',
    style: 'Hamptons · Classic · Warm',
    description: 'Pendant lights, under-cabinet strips, and warm dimmable downlights. The kitchen that earns compliments.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    products: 6,
    tag: null,
  },
]

export default function ShopTheLook() {
  return (
    <Layout>
      <Head>
        <title>Shop The Look — Curated Lighting Rooms | Scotty Light</title>
        <meta name="description" content="Curated room lighting setups with product links. Each room designed by a licensed electrician and design enthusiast. Shop warm, architectural lighting for Australian homes." />
      </Head>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <p className="subheading mb-2">Shop The Look</p>
          <h1 className={`display ${styles.heroTitle}`}>
            Every room. Every product.<br />
            <em>All linked.</em>
          </h1>
          <p className={`body-lg text-mid ${styles.heroSub}`}>
            Each room is designed with a specific lighting strategy in mind.
            Click through to find exactly what's used — and where to buy it in Australia.
          </p>
          <p className="affiliate-note mt-3">
            ✦ Some links are affiliate links. We earn a small commission at no cost to you — and only recommend what we'd actually install.
          </p>
        </div>
      </section>

      {/* ROOMS GRID */}
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {rooms.map(room => (
              <Link key={room.slug} href={`/shop-the-look/${room.slug}`} className={`${styles.card} card`}>
                <div className={styles.imgWrap}>
                  <img src={room.image} alt={room.title} />
                  {room.tag && <span className={styles.badge}>{room.tag}</span>}
                  <div className={styles.overlay}>
                    <span className={styles.overlayBtn}>Shop This Look →</span>
                  </div>
                </div>
                <div className={styles.body}>
                  <p className="caption">{room.style}</p>
                  <h2 className={styles.title}>{room.title}</h2>
                  <p className={`body text-mid ${styles.desc}`}>{room.description}</p>
                  <p className={styles.count}>{room.products} products linked →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container text-center">
          <p className="subheading mb-2">Want a Room Done For You?</p>
          <h2 className="display-sm mb-2">Lighting consultation service.</h2>
          <p className="body text-mid" style={{maxWidth: '500px', margin: '0 auto 2rem'}}>
            Send me your floor plan and photos. I'll put together a product list,
            lighting layout and mood board specific to your space.
          </p>
          <Link href="/contact" className="btn btn-primary">Enquire About a Consultation →</Link>
        </div>
      </section>
    </Layout>
  )
}
