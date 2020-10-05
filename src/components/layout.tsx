import { SkipNavLink as OriginalSkipNavLink } from '@reach/skip-nav'
import Head from 'next/head'
import React from 'react'
import type { FC } from 'react'
import { FaTwitter, FaYoutube } from 'react-icons/fa'
import styled, { createGlobalStyle } from 'styled-components'
import IconButton from './icon-button'
import Navbar from './navbar'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    background-color: #fff;
    font-family: Lato, Noto Sans JP, sans-serif;
    line-height: 1;
  }

  body {
    margin: 0;
  }
`

const Container = styled.div`
  min-height: 100vh;
`

const SkipNavLink = styled(OriginalSkipNavLink)`
  :focus {
    z-index: 101;
  }
`

const Footer = styled.footer`
  background-color: #455a64;
  color: #fff;
`

const SocialAccounts = styled.ul`
  align-items: center;
  display: flex;
  font-size: 2rem;
  font-size: max(2rem, 32px);
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 1em;
`

const SocialAccount = styled.li`
  :not(:first-of-type) {
    margin-left: 1em;
  }
`

type Props = {
  title?: string
}

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        {title && <title>{title}</title>}

        <link
          href="https://fonts.googleapis.com/css2?display=swap&amp;family=Lato:wght@400;900&amp;family=Noto+Sans+JP"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />

      <Container>
        <SkipNavLink>コンテンツにスキップ</SkipNavLink>

        <Navbar />

        {children}
      </Container>

      <Footer>
        <nav>
          <SocialAccounts>
            <SocialAccount>
              <IconButton
                aria-label="Twitter"
                as="a"
                href="https://twitter.com/Haneru_Inaba"
                rel="noopener noreferrer"
                role="button"
                target="_blank"
              >
                <FaTwitter aria-hidden="true" />
              </IconButton>
            </SocialAccount>
            <SocialAccount>
              <IconButton
                aria-label="YouTube"
                as="a"
                href="https://www.youtube.com/channel/UC0Owc36U9lOyi9Gx9Ic-4qg"
                rel="noopener noreferrer"
                role="button"
                target="_blank"
              >
                <FaYoutube aria-hidden="true" />
              </IconButton>
            </SocialAccount>
          </SocialAccounts>
        </nav>
      </Footer>
    </>
  )
}

export default Layout
