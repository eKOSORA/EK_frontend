import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'
import { SchoolProvider } from '../Context/SchoolContext'
import AuthProvider from '../Context/AuthContext'
import { AnnouncementProvider } from '../Context/AnnouncementContext'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return  <RecoilRoot>
   <AuthProvider>
    <SchoolProvider>
      <AnnouncementProvider>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </AnnouncementProvider>
    </SchoolProvider >
  </AuthProvider >
  </RecoilRoot>
}

export default MyApp
