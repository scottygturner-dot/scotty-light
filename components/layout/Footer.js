import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.mark}>✦</span>
            <span className={styles.name}>Scotty Light</span>
          </div>
          <p className={styles.tagline}>Light. Mood. Space.</p>
          <p className={styles.bio}>
            Lighting advice from a licensed electrician, designer and Airbnb host.
            Based on the Gold Coast. Writing about light.
          </p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <p className={styles.colHead}>Explore</p>
            <Link href="/ideas">Ideas</Link>
            <Link href="/shop-the-look">Shop The Look</Link>
            <Link href="/product-guides">Product Guides</Link>
            <Link href="/learn-lighting">Learn Lighting</Link>
            <Link href="/airbnb-lighting">Airbnb Lighting</Link>
          </div>
          <div className={styles.col}>
            <p className={styles.colHead}>Popular</p>
            <Link href="/learn-lighting/2700k-vs-3000k">2700K vs 3000K</Link>
            <Link href="/learn-lighting/how-to-layer-lighting">How To Layer Lighting</Link>
            <Link href="/airbnb-lighting/mood-lighting">Airbnb Mood Lighting</Link>
            <Link href="/product-guides/best-warm-led-strip-lights">Best LED Strip Lights</Link>
          </div>
          <div className={styles.col}>
            <p className={styles.colHead}>Connect</p>
            <a href="https://instagram.com/scottylight" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://pinterest.com/scottylight" target="_blank" rel="noopener noreferrer">Pinterest</a>
            <Link href="/newsletter">Newsletter</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <a href="mailto:hello@scottylight.com">hello@scottylight.com</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>© {new Date().getFullYear()} Scotty Light. Gold Coast, Australia.</p>
          <p className={styles.disclosure}>
            Some links on this site are affiliate links. We may earn a commission at no extra cost to you.
            We only recommend products we genuinely believe in.
          </p>
        </div>
      </div>
    </footer>
  )
}
