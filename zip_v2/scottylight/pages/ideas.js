import Head from 'next/head'
import Layout from '../components/layout/Layout'

export default function Ideas() {
  return (
    <Layout>
      <Head>
        <title>Lighting Ideas — Scotty Light</title>
        <meta name="description" content="Warm, architectural lighting inspiration for Australian homes." />
      </Head>
      <section style={{padding: '8rem var(--gutter) 6rem', maxWidth: 'var(--max-width)', margin: '0 auto', textAlign: 'center'}}>
        <p className="subheading mb-2">Coming Soon</p>
        <h1 className="display-sm">Lighting Ideas</h1>
        <p className="body text-mid mt-3" style={{maxWidth: '480px', margin: '1rem auto 0'}}>
          Room inspiration, mood boards, and lighting ideas for Australian homes. Publishing soon.
        </p>
      </section>
    </Layout>
  )
}
