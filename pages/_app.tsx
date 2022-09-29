import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'
import { SchoolProvider } from '../Context/SchoolContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <SchoolProvider>
     <SnackbarProvider preventDuplicate><Component {...pageProps} /></SnackbarProvider>
     </SchoolProvider >
}

export default MyApp
