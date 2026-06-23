import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import styles from './article.module.css'

const relatedProducts = [
  { name: 'Warm White LED Globes 2700K', store: 'Beacon Lighting', href: '#', badge: 'Top Pick' },
  { name: 'Philips Hue White Ambiance Starter Kit', store: 'Amazon AU', href: '#', badge: 'Smart Pick' },
  { name: 'Bedside Table Lamp — Warm Linen', store: 'Temple & Webster', href: '#', badge: 'Best Value' },
]

const related = [
  { href: '/airbnb-lighting/bedroom-lighting', title: 'Airbnb Bedroom Lighting Guide', time: '7 min' },
  { href: '/airbnb-lighting/bathroom-lighting', title: 'Airbnb Bathroom Lighting', time: '6 min' },
  { href: '/learn-lighting/how-to-layer-lighting', title: 'How To Layer Lighting', time: '6 min' },
]

export default function AirbnbMoodLighting() {
  return (
    <Layout>
      <Head>
        <title>Airbnb Mood Lighting: How Lighting Drives 5-Star Reviews | Scotty Light</title>
        <meta name="description" content="Guests don't consciously notice great lighting — they just feel relaxed, comfortable and at home. Here's the science and the strategy behind lighting that drives 5-star Airbnb reviews." />
        <meta property="og:title" content="Airbnb Mood Lighting: How Lighting Drives 5-Star Reviews" />
        <meta property="og:description" content="From a 4.98-rated host and licensed electrician: the lighting strategy behind 5-star Airbnb reviews." />
      </Head>

      <article>
        {/* HERO */}
        <div className={styles.hero}>
          <div className={styles.heroImg}>
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&q=85"
              alt="Warm mood lighting in an Airbnb bedroom"
            />
          </div>
          <div className={styles.heroContent}>
            <div className="container">
              <Link href="/airbnb-lighting" className={styles.breadcrumb}>
                ← Airbnb Lighting
              </Link>
              <span className="tag mt-2" style={{display:'inline-block'}}>Strategy</span>
              <h1 className={`display ${styles.heroTitle}`}>
                Airbnb Mood Lighting:<br />
                How Lighting Drives<br />
                5-Star Reviews
              </h1>
              <div className={styles.byline}>
                <div className={styles.avatar}>S</div>
                <div>
                  <p className={styles.bylineName}>Scott Turner</p>
                  <p className="caption">Licensed Electrician · Airbnb Host · 9 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className={styles.body}>
          <div className="container">
            <div className={styles.layout}>

              {/* ARTICLE CONTENT */}
              <div className={`prose ${styles.content}`}>

                <p className={styles.lead}>
                  Guests don't consciously notice great lighting. They just feel relaxed the moment
                  they walk in. They feel comfortable settling onto the couch. They feel like the
                  bathroom is nicer than they expected. They feel like they made a good choice.
                </p>

                <p>
                  That feeling — that wordless sense of ease — shows up in reviews as words like
                  "atmosphere", "vibe", "cosy", "felt like home", and "boutique hotel feel."
                  None of those guests are describing your light fittings. They're describing what
                  your lighting makes them feel.
                </p>

                <p>
                  I'm Scott. I'm a licensed electrician who's been installing lighting in homes
                  for 15 years. I also host on Airbnb — my rainforest retreat near Mt Warning
                  has a 4.98 rating and 226 reviews. Lighting is one of the main reasons.
                </p>

                <p>
                  This is everything I know about using lighting to create that feeling.
                </p>

                <h2>Why lighting affects reviews more than you think</h2>

                <p>
                  There's a body of research on how light affects human psychology. The short version:
                  warm, dim light activates the parasympathetic nervous system — the one responsible
                  for rest and relaxation. Cool, bright light activates alertness and stress responses.
                </p>

                <p>
                  When guests arrive at your property after a drive, they're already slightly
                  stressed. The lighting environment they walk into either accelerates that
                  decompression or delays it.
                </p>

                <p>
                  Cool white overhead lights say: office, supermarket, hospital.
                  Warm layered lighting says: sanctuary, home, exhale.
                </p>

                <p>
                  Guests feel the difference within seconds — long before they've consciously
                  assessed anything. And that first feeling colours every subsequent impression.
                </p>

                <h2>The three lighting mistakes killing your reviews</h2>

                <h3>1. Cool white globes throughout</h3>
                <p>
                  This is the most common and most damaging mistake. Any globe above 3000K in a
                  bedroom or living space will feel harsh and unwelcoming. The standard builder's
                  install — 4000K or 5000K downlights throughout — is the enemy of atmosphere.
                </p>
                <p>
                  The fix is simple: replace every globe with 2700K warm white. This single change
                  is worth more than any piece of furniture or decor you could add.
                </p>

                <h3>2. No layering — just overhead light</h3>
                <p>
                  A room lit only from above feels flat and two-dimensional. It's the McDonald's
                  of lighting — functional, but not an experience.
                </p>
                <p>
                  Layered lighting means combining ambient light (overhead), task light (reading,
                  kitchen work), and accent light (lamps, strips, uplights). The combination
                  creates depth, warmth, and the sense that a space has been thoughtfully designed.
                </p>

                <h3>3. No guest control</h3>
                <p>
                  Guests want to control their environment. A living room with no dimmer, where
                  the only option is "all the way on" or "off," feels inflexible and institutional.
                </p>
                <p>
                  A dimmer costs $40-80 and takes an electrician 30 minutes to install. It lets
                  guests dial the room to exactly the atmosphere they want. It's one of the
                  highest ROI investments you can make in any Airbnb.
                </p>

                <h2>The Scotty Light Airbnb lighting framework</h2>

                <p>
                  Here's the framework I use when assessing any Airbnb property. Work through
                  each room in this order:
                </p>

                <h3>Step 1: Fix the colour temperature</h3>
                <p>
                  Walk through the property and identify every globe or fitting above 3000K.
                  Replace with 2700K. Don't overthink this — just do it. It's the foundation
                  everything else builds on.
                </p>

                <h3>Step 2: Add a second light source to every room</h3>
                <p>
                  Every room should have at least two light sources. In the bedroom: overhead
                  plus bedside lamps. In the living room: overhead plus a floor lamp. In the
                  bathroom: ceiling light plus mirror light or vanity strip.
                </p>
                <p>
                  The second source doesn't have to be expensive. A $60 bedside lamp from
                  Temple & Webster at 2700K transforms a bedroom. The goal is depth, not cost.
                </p>

                <h3>Step 3: Add control to the living space</h3>
                <p>
                  Install a dimmer in the main living area. If you have smart globes, set up
                  a "relaxation" scene that guests can trigger with one tap.
                </p>

                <h3>Step 4: Light the entry and outdoors</h3>
                <p>
                  The path from car to door should be lit. A warm pendant or wall light at
                  the entry creates the first impression. Path lighting that guides guests
                  safely to the door makes them feel cared for before they've even entered.
                </p>

                <h3>Step 5: Add one special moment</h3>
                <p>
                  Every memorable Airbnb has one lighting element that guests specifically
                  mention. At The Sadhu Hut, it's the outdoor bathroom lit with warm uplights
                  under the stars. At other properties I've installed, it's been LED strip
                  lighting under a floating bed, or a single pendant over a clawfoot bath.
                </p>
                <p>
                  What's the one lighting moment in your property that could make a guest
                  reach for their phone to photograph?
                </p>

                <h2>The products worth investing in</h2>

                <p>
                  You don't need to spend a lot. Here's where to put your money:
                </p>

                <ul>
                  <li><strong>2700K LED globes throughout</strong> — $5-15 per globe. Do this first. Everything else is secondary.</li>
                  <li><strong>A bedside lamp for each sleeping spot</strong> — $50-120 per lamp. One of the highest ROI items in an Airbnb.</li>
                  <li><strong>One dimmer switch in the living area</strong> — $40-80 installed. Massive impact on perceived quality.</li>
                  <li><strong>Warm LED strip for under a shelf or behind a TV</strong> — $30-60. Adds depth and a design touch.</li>
                  <li><strong>Path lighting or entry light</strong> — $40-100. First impressions compound.</li>
                </ul>

                <p>
                  Total outlay for a full upgrade: $300-600 for a typical one-bedroom property.
                  The return, in higher review scores and increased bookings, pays for that
                  within a month or two.
                </p>

                <h2>My Sadhu Hut lighting setup</h2>

                <p>
                  For context, here's exactly what I run at my own property:
                </p>

                <ul>
                  <li>2700K warm white throughout (not a single cool globe in the property)</li>
                  <li>Bedside lamp each side of the queen bed — warm linen shade, dimmable</li>
                  <li>Warm pendant over the reading couch</li>
                  <li>LED strip under the kitchen bench — warm white, motion activated</li>
                  <li>Outdoor uplights in the garden and along the path to the creek</li>
                  <li>The outdoor bathroom lit with warm wall lights — the "wow moment"</li>
                </ul>

                <p>
                  The result: guests consistently describe the property as having incredible
                  "atmosphere" without being able to articulate why. That's exactly what you
                  want. The best lighting is invisible — you only feel it.
                </p>

                <h2>Where to start today</h2>

                <p>
                  If you do nothing else from this article, do this: go to Beacon Lighting
                  or your nearest lighting store and buy 2700K warm white LED globes to replace
                  every globe in your property.
                </p>

                <p>
                  That one change, done this week, will improve your review scores.
                  Not eventually — almost immediately.
                </p>

                <p>
                  Then work through the framework above, room by room, and watch what happens
                  to your guest feedback over the next few months.
                </p>

                <p>
                  Your lighting is one of the only things in your property that guests experience
                  continuously, subconsciously, for every moment of their stay.
                  It deserves more attention than most hosts give it.
                </p>

              </div>

              {/* SIDEBAR */}
              <aside className={styles.sidebar}>

                {/* Products */}
                <div className={styles.sideSection}>
                  <p className="subheading mb-2">Products Mentioned</p>
                  {relatedProducts.map(p => (
                    <a key={p.name} href={p.href} className={styles.product} target="_blank" rel="noopener noreferrer sponsored">
                      <div>
                        <span className={styles.productBadge}>{p.badge}</span>
                        <p className={styles.productName}>{p.name}</p>
                        <p className="caption">{p.store}</p>
                      </div>
                      <span className={styles.productArrow}>→</span>
                    </a>
                  ))}
                  <p className="affiliate-note mt-2">Affiliate links — we earn a small commission.</p>
                </div>

                {/* Email */}
                <div className={styles.sideEmail}>
                  <p className="subheading mb-1" style={{color:'var(--accent-light)'}}>Free Checklist</p>
                  <p className={styles.emailTitle}>The Airbnb Lighting Checklist</p>
                  <p className="caption mt-1 mb-3" style={{color:'rgba(240,235,227,0.6)'}}>Every change from this article in a printable one-pager.</p>
                  <form onSubmit={e => e.preventDefault()}>
                    <input type="email" placeholder="your@email.com.au" className={styles.emailInput} />
                    <button type="submit" className={`btn btn-primary ${styles.emailBtn}`}>
                      Send It Free
                    </button>
                  </form>
                </div>

                {/* Related */}
                <div className={styles.sideSection}>
                  <p className="subheading mb-2">Read Next</p>
                  {related.map(r => (
                    <Link key={r.href} href={r.href} className={styles.relatedLink}>
                      <span>{r.title}</span>
                      <span className="caption">{r.time} →</span>
                    </Link>
                  ))}
                </div>

              </aside>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}
