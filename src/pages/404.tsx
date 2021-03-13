import '@reach/skip-nav/styles.css'
import { SkipNavContent } from '@reach/skip-nav'
import { useMessageFormatter } from '@react-aria/i18n'
import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/pages/404.module.css'

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

const NotFound: NextPage = () => {
  const formatMessage = useMessageFormatter(messages)

  return (
    <Layout title={formatMessage('title')}>
      <SkipNavContent />

      <main className={styles.container}>
        <p>
          <Link href="/">
            <a className={styles.link}>{formatMessage('backToTop')}</a>
          </Link>
        </p>
      </main>
    </Layout>
  )
}

export default NotFound
