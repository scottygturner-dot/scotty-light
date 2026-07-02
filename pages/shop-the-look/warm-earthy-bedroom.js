import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import styles from '../../styles/comingSoon.module.css'

export default function WarmEarthyBedroom() {
  return (
    <Layout>
      <Head>
        <title>Warm Earthy Bedroom — Coming Soon | Scotty Light</title>
        <meta name="description" content="This Shop The Look room is coming soon. Check back for the full curated lighting list." />
      </Head>
      <section className={styles.wrap}>
        <div className={styles.inner}>
          <span className={styles.badge}>Coming Soon</span>
          <h1 className={`display-sm ${styles.title}`}>Warm Earthy Bedroom</h1>
          <p className={`body-lg ${styles.sub}`}>
            We're putting the finishing touches on this room's product list.
            Check back soon for the full curated lighting look.
          </p>
          <Link href="/shop-the-look" className={`btn btn-primary ${styles.back}`}>
            ← Back to Shop The Look
          </Link>
        </div>
      </section>
    </Layout>
  )
}
