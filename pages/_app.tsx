import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'
import { SchoolProvider } from '../Context/SchoolContext'
import AuthProvider from '../Context/AuthContext'
import { AnnouncementProvider } from '../Context/AnnouncementContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthProvider>
    <SchoolProvider>
      <AnnouncementProvider>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </AnnouncementProvider>
    </SchoolProvider >
  </AuthProvider >
}

export default MyApp
