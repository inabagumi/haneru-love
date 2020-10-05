import type { AppProps } from 'next/app'
import React from 'react'
import type { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import '@reach/skip-nav/styles.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
