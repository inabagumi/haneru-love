import { SkipNavContent } from '@reach/skip-nav'
import type { NextPage } from 'next'
import styled from 'styled-components'
import Hero from '../components/hero'
import Layout from '../components/layout'

const Content = styled.main``

const Section = styled.section`
  align-items: center;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  min-height: 100vh;
`

const Home: NextPage = () => {
  return (
    <Layout title="Haneru Inaba - ALWAYS WATCHING YOU">
      <Hero />

      <SkipNavContent>
        <Content>
          <Section id="profile">
            <p>Profile</p>
          </Section>
          <Section id="discography">
            <p>Discography</p>
          </Section>
          <Section id="news">
            <p>News</p>
          </Section>
          <Section id="goods">
            <p>Goods</p>
          </Section>
        </Content>
      </SkipNavContent>
    </Layout>
  )
}

export default Home
