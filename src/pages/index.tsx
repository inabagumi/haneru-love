import { SkipNavContent } from '@reach/skip-nav'
import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Hero = styled.div`
  align-items: center;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  min-height: 100vh;
  position: relative;
`

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
      <Hero>
        <p>hero</p>
      </Hero>

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
