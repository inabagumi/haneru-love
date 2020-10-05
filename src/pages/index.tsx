import { SkipNavContent } from '@reach/skip-nav'
import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import legacyHeroImage from '../assets/hero.jpg'
import heroImage from '../assets/hero.webp'
import legacyWideHeroImage from '../assets/hero-wide.jpg'
import wideHeroImage from '../assets/hero-wide.webp'
import Layout from '../components/layout'

const Hero = styled.div`
  min-height: 100vh;
  position: relative;
`

const HeroImage = styled.picture`
  bottom: 0;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;

  img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`

const Section = styled.section`
  min-height: 100vh;
`

const Home: NextPage = () => {
  return (
    <Layout title="Haneru Inaba - ALWAYS WATCHING YOU">
      <Hero>
        <HeroImage>
          <source
            media="(orientation: portrait)"
            srcSet={heroImage}
            type="image/webp"
          />
          <source
            media="(orientation: portrait)"
            srcSet={legacyHeroImage}
            type="image/jpeg"
          />
          <source
            media="(orientation: landscape)"
            srcSet={wideHeroImage}
            type="image/webp"
          />
          <img alt="" role="presentation" src={legacyWideHeroImage} />
        </HeroImage>
      </Hero>

      <SkipNavContent>
        <main>
          <Section></Section>
        </main>
      </SkipNavContent>
    </Layout>
  )
}

export default Home
