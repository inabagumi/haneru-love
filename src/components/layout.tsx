import '@reach/skip-nav/styles.css'
import { SkipNavLink } from '@reach/skip-nav'
import { useLocale, useMessageFormatter } from '@react-aria/i18n'
import Head from 'next/head'
import type { ReactNode, VFC } from 'react'
import { FaTwitter, FaYoutube } from 'react-icons/fa'
import iconButtonStyles from '../styles/components/icon-button.module.css'
import styles from '../styles/components/layout.module.css'
import Navbar from './navbar'

const messages = {
  'en-US': {
    skipToContent: 'Skip to content'
  },
  'ja-JP': {
    skipToContent: 'コンテンツまでスキップ'
  }
}

type Props = {
  children: ReactNode
  title?: string
}

const Layout: VFC<Props> = ({ children, title }) => {
  const { locale } = useLocale()
  const formatMessage = useMessageFormatter(messages)

  return (
    <>
      <Head>
        {title && <title>{title}</title>}

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?display=swap&amp;family=Lato:wght@400;900"
          rel="preload"
        />
        <link
          href="https://fonts.googleapis.com/css2?display=swap&amp;family=Lato:wght@400;900"
          rel="stylesheet"
        />

        {locale === 'ja' && (
          <>
            <link
              as="style"
              href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans+JP"
              rel="preload"
            />
            <link
              href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans+JP"
              rel="stylesheet"
            />
          </>
        )}
      </Head>

      <div className={styles.container}>
        <SkipNavLink className={styles.skipNavLink}>
          {formatMessage('skipToContent')}
        </SkipNavLink>

        <Navbar />

        {children}
      </div>

      <footer className={styles.footer}>
        <nav>
          <ul className={styles.socialAccounts}>
            <li className={styles.socialAccount}>
              <a
                aria-label="Twitter"
                className={iconButtonStyles.iconButton}
                href="https://twitter.com/Haneru_Inaba"
                rel="noopener noreferrer"
                role="button"
                target="_blank"
                translate="no"
              >
                <FaTwitter aria-hidden="true" />
              </a>
            </li>
            <li className={styles.socialAccount}>
              <a
                aria-label="YouTube"
                className={iconButtonStyles.iconButton}
                href="https://www.youtube.com/channel/UC0Owc36U9lOyi9Gx9Ic-4qg"
                rel="noopener noreferrer"
                role="button"
                target="_blank"
                translate="yes"
              >
                <FaYoutube aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default Layout
