import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

const links = [
  { href: '/ideas',           label: 'Ideas' },
  { href: '/shop-the-look',   label: 'Shop The Look' },
  { href: '/product-guides',  label: 'Product Guides' },
  { href: '/learn-lighting',  label: 'Learn' },
  { href: '/airbnb-lighting', label: 'Airbnb Lighting' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>✦</span>
          <span className={styles.logoText}>Scotty Light</span>
        </Link>

        <nav className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className={styles.link} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/airbnb-lighting" className={`${styles.link} ${styles.cta}`} onClick={() => setOpen(false)}>
            Airbnb Guide
          </Link>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
