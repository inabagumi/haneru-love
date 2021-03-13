import '../styles/globals.css'
import { I18nProvider } from '@react-aria/i18n'
import type { AppProps } from 'next/app'
import type { VFC } from 'react'

const App: VFC<AppProps> = ({ Component, pageProps, router }) => {
  const locale = router.locale ?? 'en'

  return (
    <I18nProvider locale={locale}>
      <Component {...pageProps} />
    </I18nProvider>
  )
}

export default App
