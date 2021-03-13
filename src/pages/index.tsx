import '@reach/skip-nav/styles.css'
import { SkipNavContent } from '@reach/skip-nav'
import type { NextPage } from 'next'
import Hero from '../components/hero'
import Layout from '../components/layout'
import styles from '../styles/pages/index.module.css'

const Home: NextPage = () => {
  return (
    <Layout title="Haneru Inaba - ALWAYS WATCHING YOU">
      <Hero />

      <SkipNavContent />

      <main>
        <section className={styles.section} id="profile">
          <p>Profile</p>
        </section>
        <section className={styles.section} id="discography">
          <p>Discography</p>
        </section>
        <section className={styles.section} id="news">
          <p>News</p>
        </section>
        <section className={styles.section} id="goods">
          <p>Goods</p>
        </section>
      </main>
    </Layout>
  )
}

export default Home
