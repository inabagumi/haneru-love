import type { AppProps } from 'next/app'
import React from 'react'
import type { FC } from 'react'

import '@reach/skip-nav/styles.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
