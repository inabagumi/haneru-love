import { SkipNavContent } from '@reach/skip-nav'
import { useMessageFormatter } from '@react-aria/i18n'
import NextLink from 'next/link'
import type { FC } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const messages = {
  'en-US': {
    backToTop: 'Back to top',
    title: 'Page not found'
  },
  'ja-JP': {
    backToTop: 'トップページに戻る',
    title: 'ページが見つかりませんでした'
  }
}

const Container = styled.main`
  padding-top: 2rem;
`

const Link = styled.a`
  color: ${(props) => props.theme.palette.primary};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

const NotFound: FC = () => {
  const formatMessage = useMessageFormatter(messages)

  return (
    <Layout title={formatMessage('title')}>
      <SkipNavContent>
        <Container>
          <p>
            <NextLink href="/" passHref>
              <Link>{formatMessage('backToTop')}</Link>
            </NextLink>
          </p>
        </Container>
      </SkipNavContent>
    </Layout>
  )
}

export default NotFound
