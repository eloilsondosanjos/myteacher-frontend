import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header'
import { ThemeProvider } from '@mui/material'
import theme from '../src/themes/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
    )
}

export default MyApp
