import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'
import { SchoolProvider } from '../Context/SchoolContext'
import AuthProvider from '../Context/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthProvider>
    <SchoolProvider>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </SchoolProvider >
  </AuthProvider >
}

export default MyApp
