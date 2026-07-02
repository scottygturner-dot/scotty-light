import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import styles from '../../styles/comingSoon.module.css'

export default function LightingMistakes() {
  return (
    <Layout>
      <Head>
        <title>The 7 Lighting Mistakes Almost Every Homeowner Makes — Coming Soon | Scotty Light</title>
        <meta name="description" content="This Learn Lighting article is coming soon. Check back for the full guide." />
      </Head>
      <section className={styles.wrap}>
        <div className={styles.inner}>
          <span className={styles.badge}>Coming Soon</span>
          <h1 className={`display-sm ${styles.title}`}>The 7 Lighting Mistakes Almost Every Homeowner Makes</h1>
          <p className={`body-lg ${styles.sub}`}>
            This article is still being written. Check back soon for the full guide.
          </p>
          <Link href="/learn-lighting" className={`btn btn-primary ${styles.back}`}>
            ← Back to Learn Lighting
          </Link>
        </div>
      </section>
    </Layout>
  )
}
