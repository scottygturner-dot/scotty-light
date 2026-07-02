import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import styles from './contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `New enquiry from ${form.name}`
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:hello@scottylight.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <Layout>
      <Head>
        <title>Contact — Scotty Light</title>
        <meta name="description" content="Get in touch with Scotty Light for lighting consultations, questions, or collaborations." />
      </Head>

      <section className={styles.hero}>
        <div className="container">
          <p className="subheading mb-2">Get In Touch</p>
          <h1 className={`display ${styles.heroTitle}`}>
            Let's talk<br /><em>lighting.</em>
          </h1>
          <p className={`body-lg text-mid ${styles.heroSub}`}>
            Questions, consultation enquiries, or just want to say hi — send a message
            and I'll get back to you.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <form className={styles.formWrap} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Send Message →
            </button>
            {sent && (
              <p className={styles.success}>
                Opening your email client to send this to hello@scottylight.com…
              </p>
            )}
          </form>
        </div>
      </section>
    </Layout>
  )
}
