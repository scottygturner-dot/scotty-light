import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import styles from './guide.module.css'

const products = [
  {
    rank: 1,
    badge: 'Best Overall',
    name: 'Govee LED Strip Lights — Warm White 2700K',
    brand: 'Govee',
    price: '$45–65',
    where: 'Amazon AU',
    href: '#',
    rating: 4.7,
    reviews: 2840,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500&q=80',
    pros: [
      'Consistent 2700K warm white — no colour drift',
      'App controlled with reliable Bluetooth connection',
      'Good CRI (90+) — colours look accurate underneath',
      'Ships to Australia with fast delivery',
      'Easy to cut to length',
    ],
    cons: [
      'App can be fiddly to set up initially',
      'Connector quality varies — buy extra',
    ],
    verdict: 'The go-to for most installations. Reliable colour, good app control, and priced well for what you get. I\'ve used these in multiple Airbnb installs and they hold up well.',
    bestFor: 'Under-cabinet, behind TVs, cove lighting',
  },
  {
    rank: 2,
    badge: 'Best Premium',
    name: 'Philips Hue Lightstrip Plus',
    brand: 'Philips Hue',
    price: '$149–189',
    where: 'JB Hi-Fi / Amazon AU',
    href: '#',
    rating: 4.8,
    reviews: 1240,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80',
    pros: [
      'Best-in-class colour accuracy and consistency',
      'Integrates with Hue ecosystem (scenes, automations)',
      'Extremely reliable — no connectivity issues',
      'Excellent warm white at 2200K–2700K',
      'Works with Apple HomeKit, Google Home, Alexa',
    ],
    cons: [
      'Expensive — hard to justify for large runs',
      'Requires Hue Bridge for full functionality',
    ],
    verdict: 'If you\'re already in the Hue ecosystem or running a premium property, this is worth every cent. The colour accuracy and reliability are genuinely superior. For Airbnbs, the automation capability alone is worth it.',
    bestFor: 'Smart home setups, premium Airbnbs, feature lighting',
  },
  {
    rank: 3,
    badge: 'Best Budget',
    name: 'Bunnings Warm White LED Strip 5m',
    brand: 'Various',
    price: '$25–40',
    where: 'Bunnings Warehouse',
    href: '#',
    rating: 4.1,
    reviews: 380,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&q=80',
    pros: [
      'Cheapest option with same-day availability',
      'Simple plug-and-play installation',
      'Decent for low-visibility areas',
      'No app required — just on/off',
    ],
    cons: [
      'Colour consistency can vary between rolls',
      'Lower CRI — colours look slightly washed',
      'No dimming without additional controller',
      'Less reliable adhesive backing',
    ],
    verdict: 'Fine for areas where you can\'t see the strip directly — inside a cove or behind furniture. Not recommended where the strip itself is visible, as hotspots and colour inconsistency show more.',
    bestFor: 'Hidden cove lighting, inside cabinets, low-budget projects',
  },
  {
    rank: 4,
    badge: 'Best for Installs',
    name: 'Hafele Loox LED Strip 2700K',
    brand: 'Häfele',
    price: '$80–120',
    where: 'Hafele AU / Trade suppliers',
    href: '#',
    rating: 4.9,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500&q=80',
    pros: [
      'Professional grade — consistent colour batch to batch',
      'High CRI (95+) — best colour rendering available',
      'Designed for aluminium diffuser profiles',
      'Excellent dimmer compatibility',
      'What electricians actually specify on premium jobs',
    ],
    cons: [
      'Trade pricing — harder to access for DIY',
      'Requires proper termination — not plug and play',
      'Overkill for most residential applications',
    ],
    verdict: 'This is what I specify on professional installs. If you\'re doing a renovation and want the lighting to look like it was done by a designer, use this with aluminium profiles. The difference in quality is visible.',
    bestFor: 'Renovations, under-bench kitchen lighting, feature joinery',
  },
  {
    rank: 5,
    badge: 'Best Outdoor',
    name: 'Integral LED IP67 Strip 2700K',
    brand: 'Integral LED',
    price: '$60–90',
    where: 'Lighting suppliers AU',
    href: '#',
    rating: 4.6,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    pros: [
      'IP67 rated — fully waterproof',
      'Survives Australian outdoor conditions',
      'Consistent 2700K in all weather',
      'Suitable for garden, decking, pool areas',
    ],
    cons: [
      'Harder to source than indoor strips',
      'More expensive per metre',
      'Requires weatherproof connectors',
    ],
    verdict: 'The only option I\'d use outdoors or in wet areas. IP67 means it can be submerged briefly — far more than the IP44 or IP65 strips that are often sold as "outdoor". Worth the extra cost for peace of mind.',
    bestFor: 'Outdoor decking, garden paths, pool areas, wet areas',
  },
]

const faqs = [
  {
    q: 'What colour temperature should I choose for LED strips?',
    a: '2700K for living areas, bedrooms, and anywhere you want atmosphere. 3000K is acceptable but slightly cooler. Avoid anything above 3000K in residential spaces — it will feel clinical. For kitchens and bathrooms where task lighting matters, 3000K is fine.',
  },
  {
    q: 'Do I need an electrician to install LED strip lights?',
    a: 'For plug-in 12V or 24V strip lights: no, you can do this yourself. For hardwired installations — connecting to a dimmer switch, installing into joinery with a driver — yes, you need a licensed electrician in Australia. It\'s not worth the risk doing mains voltage work yourself.',
  },
  {
    q: 'What is CRI and does it matter for LED strips?',
    a: 'CRI (Colour Rendering Index) measures how accurately a light source renders colours compared to natural light. 100 is perfect. Most budget strips are CRI 80. Good strips are CRI 90+. The higher the CRI, the truer colours look underneath the light — especially important for kitchens and anywhere you\'re showing off materials like timber, stone, or fabric.',
  },
  {
    q: 'What\'s the difference between 12V and 24V LED strips?',
    a: '24V strips have less voltage drop over long runs — meaning the light stays consistent from end to end. For runs over 3-4 metres, 24V is strongly preferred. 12V is fine for short runs under furniture or in small spaces.',
  },
  {
    q: 'Do I need diffuser profiles for LED strip lights?',
    a: 'If the strip is visible (in a cove, under a floating shelf, behind glass), yes — always use an aluminium extrusion with a diffuser cover. It spreads the light, hides hotspots between LEDs, and looks professional. If the strip is hidden (inside a cabinet, behind furniture), you can skip it.',
  },
  {
    q: 'Are Govee strips available in Australia?',
    a: 'Yes — Govee ships to Australia via Amazon AU with reasonable delivery times, usually 5-10 business days. They also stock through some local retailers. Check Amazon AU first for pricing and availability.',
  },
]

export default function BestLEDStripLights() {
  return (
    <Layout>
      <Head>
        <title>Best Warm LED Strip Lights Australia (2025) — Electrician Tested | Scotty Light</title>
        <meta name="description" content="The best warm white LED strip lights available in Australia, tested and reviewed by a licensed electrician. Govee, Philips Hue, Hafele and more — with honest pros, cons and where to buy." />
        <meta property="og:title" content="Best Warm LED Strip Lights Australia (2025) | Scotty Light" />
        <meta property="og:description" content="Honest LED strip light reviews from a licensed electrician. 5 picks tested across real Australian homes and Airbnbs." />
      </Head>

      <article>
        {/* HERO */}
        <section className={styles.hero}>
          <div className="container">
            <Link href="/product-guides" className={styles.breadcrumb}>← Product Guides</Link>
            <span className="tag" style={{display:'inline-block', marginBottom:'1rem'}}>LED Strips</span>
            <h1 className={`display ${styles.heroTitle}`}>
              Best Warm LED Strip Lights<br />
              <em>in Australia (2025)</em>
            </h1>
            <p className={`body-lg ${styles.heroSub}`}>
              Tested across multiple home and Airbnb installations by a licensed electrician.
              Five picks, honest pros and cons, and exactly where to buy each one in Australia.
            </p>
            <div className={styles.heroMeta}>
              <div className={styles.byline}>
                <div className={styles.avatar}>S</div>
                <div>
                  <p className={styles.bylineName}>Scott Turner — Licensed Electrician</p>
                  <p className="caption">Updated June 2025 · 5 products reviewed · 10 min read</p>
                </div>
              </div>
              <p className="affiliate-note">
                ✦ This guide contains affiliate links. We earn a small commission at no cost to you.
                Recommendations are based on real installation experience — not who pays us most.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK PICKS */}
        <section className={styles.quickPicks}>
          <div className="container">
            <p className="subheading mb-3">Quick Picks</p>
            <div className={styles.picksGrid}>
              {products.map(p => (
                <a key={p.rank} href={p.href} className={styles.pickCard} target="_blank" rel="noopener noreferrer sponsored">
                  <span className={styles.pickBadge}>{p.badge}</span>
                  <p className={styles.pickName}>{p.name}</p>
                  <p className={styles.pickPrice}>{p.price}</p>
                  <span className={styles.pickShop}>{p.where} →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* BUYING GUIDE INTRO */}
        <section className={styles.intro}>
          <div className="container">
            <div className={styles.introGrid}>
              <div className="prose">
                <h2>What to look for in warm LED strip lights</h2>
                <p>
                  After installing LED strips in dozens of homes and Airbnbs, here's what actually
                  matters — and what's just marketing.
                </p>
                <h3>Colour temperature: 2700K is the target</h3>
                <p>
                  Anything labelled "warm white" can range from 2200K to 3500K depending on the brand.
                  For residential atmosphere lighting, 2700K is the sweet spot — warm enough to feel
                  inviting, bright enough to be functional. Always check the actual Kelvin rating,
                  not just "warm white" on the box.
                </p>
                <h3>CRI 90+ is worth paying for</h3>
                <p>
                  Low CRI strips make timber look orange, white walls look yellow, and skin tones
                  look washed. CRI 90+ is the threshold where colours look natural and accurate.
                  For anywhere you're showing off materials or design — kitchen joinery, feature
                  walls, bathrooms — don't go below CRI 90.
                </p>
                <h3>24V for runs over 3 metres</h3>
                <p>
                  12V strips suffer from voltage drop on longer runs — the far end is noticeably
                  dimmer than the near end. 24V strips maintain consistent brightness across much
                  longer distances. If you're running more than 3 metres, buy 24V.
                </p>
                <h3>Always use a diffuser profile if the strip is visible</h3>
                <p>
                  Bare LED strips show individual hotspots — you can see each LED dot. An aluminium
                  extrusion with a diffuser cover spreads the light evenly and looks professional.
                  They cost $15-30 per metre and make a visible difference.
                </p>
              </div>
              <div className={styles.introSide}>
                <div className={styles.checkCard}>
                  <p className="subheading mb-2">Buying Checklist</p>
                  {[
                    ['🌡️', 'Colour temp: 2700K'],
                    ['🎨', 'CRI: 90+ for visible areas'],
                    ['⚡', 'Voltage: 24V for runs >3m'],
                    ['💧', 'IP67 for outdoor/wet areas'],
                    ['📐', 'Diffuser profile if visible'],
                    ['🔌', 'Compatible driver/dimmer'],
                    ['✂️', 'Check cut points per metre'],
                  ].map(([icon, text]) => (
                    <div key={text} className={styles.checkItem}>
                      <span>{icon}</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.costCard}>
                  <p className="subheading mb-2">Typical Costs (AU)</p>
                  {[
                    ['Budget strip (5m)', '$25–40'],
                    ['Mid-range strip (5m)', '$45–80'],
                    ['Premium strip (5m)', '$80–120'],
                    ['Aluminium profile (per m)', '$15–30'],
                    ['Driver / transformer', '$20–50'],
                    ['Dimmer (LED compatible)', '$40–80'],
                    ['Electrician (1hr install)', '$120–160'],
                  ].map(([item, cost]) => (
                    <div key={item} className={styles.costRow}>
                      <span className="caption">{item}</span>
                      <span className={styles.costNum}>{cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT REVIEWS */}
        <section className={`section ${styles.reviews}`}>
          <div className="container">
            <p className="subheading mb-1">The Reviews</p>
            <h2 className="display-sm mb-4">5 best warm LED strip lights in Australia.</h2>

            {products.map((p, i) => (
              <div key={p.rank} className={styles.productCard} id={`pick-${p.rank}`}>
                <div className={styles.productHeader}>
                  <div className={styles.productRank}>
                    <span className={styles.rankNum}>#{p.rank}</span>
                    <span className={styles.rankBadge}>{p.badge}</span>
                  </div>
                  <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{p.name}</h3>
                    <div className={styles.productMeta}>
                      <span className={styles.productPrice}>{p.price}</span>
                      <span className="caption">·</span>
                      <span className="caption">{p.where}</span>
                      <span className="caption">·</span>
                      <span className={styles.stars}>{'★'.repeat(Math.round(p.rating))} {p.rating}</span>
                      <span className="caption">({p.reviews.toLocaleString()} reviews)</span>
                    </div>
                  </div>
                  <a
                    href={p.href}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    style={{flexShrink: 0}}
                  >
                    View Deal →
                  </a>
                </div>

                <div className={styles.productBody}>
                  <div className={styles.productImg}>
                    <img src={p.image} alt={p.name} />
                    <span className={styles.bestFor}>Best for: {p.bestFor}</span>
                  </div>
                  <div className={styles.productDetail}>
                    <div className={styles.proscons}>
                      <div className={styles.pros}>
                        <p className={styles.prosHead}>✓ Pros</p>
                        <ul>
                          {p.pros.map(pro => <li key={pro}>{pro}</li>)}
                        </ul>
                      </div>
                      <div className={styles.cons}>
                        <p className={styles.consHead}>✗ Cons</p>
                        <ul>
                          {p.cons.map(con => <li key={con}>{con}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className={styles.verdict}>
                      <p className={styles.verdictHead}>⚡ Electrician's Verdict</p>
                      <p className="body">{p.verdict}</p>
                    </div>
                    <a
                      href={p.href}
                      className={`btn btn-outline ${styles.productCta}`}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                    >
                      Check Price at {p.where} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={`section ${styles.faq}`}>
          <div className="container">
            <div className={styles.faqInner}>
              <div>
                <p className="subheading mb-1">FAQ</p>
                <h2 className="display-sm mb-4">Common questions<br />answered.</h2>
                <Link href="/learn-lighting" className="btn btn-outline">
                  More in Learn Lighting →
                </Link>
              </div>
              <div className={styles.faqList}>
                {faqs.map(f => (
                  <details key={f.q} className={styles.faqItem}>
                    <summary className={styles.faqQ}>{f.q}</summary>
                    <p className={`body text-mid ${styles.faqA}`}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className={styles.bottomCta}>
          <div className="container text-center">
            <p className="subheading mb-2" style={{color:'var(--accent-light)'}}>
              Airbnb Host?
            </p>
            <h2 className={`display-sm ${styles.ctaTitle}`}>
              See how LED strips transform short-stay properties.
            </h2>
            <p className={`body-lg ${styles.ctaSub}`}>
              The right strip lighting is one of the highest-ROI Airbnb upgrades available.
              Read the full guide.
            </p>
            <Link href="/airbnb-lighting" className="btn btn-primary">
              Airbnb Lighting Guide →
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  )
}
