import { I18nProvider } from '@react-aria/i18n'
import type { AppProps } from 'next/app'
import type { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import '@reach/skip-nav/styles.css'

const App: FC<AppProps> = ({ Component, pageProps, router }) => {
  const locale = router.locale ?? 'en'

  return (
    <I18nProvider locale={locale}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </I18nProvider>
  )
}

export default App
