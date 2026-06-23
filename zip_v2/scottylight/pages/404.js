import Link from 'next/link'
import Layout from '../components/layout/Layout'

export default function NotFound() {
  return (
    <Layout>
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem var(--gutter)',
      }}>
        <div>
          <p style={{fontFamily: 'var(--font-display)', fontSize: '6rem', lineHeight: 1, color: 'var(--accent)', opacity: 0.3, marginBottom: '1rem'}}>404</p>
          <p className="subheading mb-2">Page Not Found</p>
          <h1 className="display-sm mb-3">This room needs lighting.</h1>
          <p className="body text-mid" style={{maxWidth: '400px', margin: '0 auto 2rem'}}>
            The page you're looking for doesn't exist — but there's plenty of lighting
            inspiration waiting for you.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/" className="btn btn-primary">Back to Home →</Link>
            <Link href="/airbnb-lighting" className="btn btn-outline">Airbnb Lighting</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
