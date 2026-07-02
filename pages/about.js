import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/Layout'
import styles from './about.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Scotty Light — The Electrician Behind the Brand</title>
        <meta name="description" content="Scotty Light is built by Scott Turner — a licensed electrician, Airbnb host, and lighting enthusiast based on the Gold Coast. Here's the story behind the site." />
      </Head>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div>
              <p className="subheading mb-2">The Story</p>
              <h1 className={`display ${styles.heroTitle}`}>
                I'm an electrician who<br />
                got obsessed with<br />
                <em>how light makes you feel.</em>
              </h1>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.avatarWrap}>
                <div className={styles.avatar}>S</div>
              </div>
              <div className={styles.heroStats}>
                {[
                  ['15+', 'Years electrical experience'],
                  ['4.98★', 'Airbnb rating'],
                  ['226+', 'Guest reviews'],
                  ['100s', 'Homes wired'],
                ].map(([num, label]) => (
                  <div key={label} className={styles.stat}>
                    <span className={styles.statNum}>{num}</span>
                    <span className={styles.statLabel}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className={`container ${styles.storyWrap}`}>
          <div className="prose">
            <h2>Why lighting became an obsession</h2>
            <p>
              After 15 years wiring homes across the Gold Coast and hinterland, I noticed something.
              The homes that felt genuinely beautiful — the ones where people walked in and immediately
              relaxed — almost always had one thing in common. The lighting was considered.
            </p>
            <p>
              Not expensive. Not complicated. Just <strong>considered</strong>.
            </p>
            <p>
              The homes that felt flat, cold, or generic? Almost always, the lighting was an afterthought.
              A single overhead downlight in every room. Cool white globes throughout. No layering, no warmth,
              no atmosphere.
            </p>
            <p>
              When I started hosting on Airbnb, I applied everything I'd learned. I went through the
              Sadhu Hut — my rainforest retreat near Wollumbin/Mt Warning — and changed every globe,
              added bedside lamps, installed a dimmer in the living space, and lit the outdoor bathroom
              with warm uplights.
            </p>
            <p>
              The reviews changed immediately. Guests started mentioning the "atmosphere" and the "vibe."
              The rating went to 4.98 and stayed there.
            </p>
            <p>
              That's when I realised: most people don't know what I know. And what I know isn't complicated —
              it's just the accumulated knowledge of someone who's been in hundreds of homes and paid close
              attention to what makes a space feel good.
            </p>
            <p>
              Scotty Light is me sharing that knowledge. No advertising agenda. No brand deals.
              Just a licensed electrician who genuinely loves light, writing about it honestly.
            </p>

            <h2>What this site is (and isn't)</h2>
            <p>
              Scotty Light is <strong>not</strong> a lighting store. I don't sell anything directly.
              I don't take payment for recommendations. I use affiliate links where relevant —
              I'll always disclose them — but they never influence what I say.
            </p>
            <p>
              This is a <strong>media brand</strong> built on a simple idea: the right lighting
              transforms how a space feels, and most people deserve to know how to get it right.
            </p>

            <h2>About The Sadhu Hut</h2>
            <p>
              My Airbnb is a rainforest cabin on 100 acres below Mt Warning on the Gold Coast hinterland.
              A creek runs metres from the door. There's an outdoor star-shower bathroom.
              Spring water, organic coffee, and birdsong at 5am.
            </p>
            <p>
              It's also where I test everything. Every lighting upgrade I recommend has been
              tested in a real property with real guests. The 4.98 rating is the proof of concept.
            </p>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.sideCard}>
              <p className="subheading mb-2">Credentials</p>
              {[
                ['⚡', 'Licensed Electrician', 'Queensland licence holder. 15+ years installation experience.'],
                ['🏡', 'Airbnb Superhost', '4.98 rating · 226+ reviews · The Sadhu Hut, Wollumbin'],
                ['🎨', 'Design Enthusiast', 'Following architectural and interior design trends closely for over a decade.'],
                ['🔦', 'Real Installer', 'Every recommendation comes from personal installation experience.'],
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

            <div className={styles.sideCard}>
              <p className="subheading mb-2">Work With Me</p>
              <p className="body text-mid mb-3">
                I offer lighting consultations for homeowners, renovators, and Airbnb hosts.
                Send me your floor plan and I'll put together a product list and lighting layout.
              </p>
              <p className="body text-mid mb-3">
                <a href="mailto:hello@scottylight.com">hello@scottylight.com</a>
              </p>
              <Link href="/contact" className="btn btn-primary w-full" style={{justifyContent: 'center'}}>
                Get In Touch →
              </Link>
            </div>

            <div className={styles.sideCard}>
              <p className="subheading mb-2">Affiliate Disclosure</p>
              <p className="body text-mid">
                Some links on Scotty Light are affiliate links. When you buy through them
                I may earn a small commission — at no extra cost to you. This helps keep
                the site running. It never influences what I recommend.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
