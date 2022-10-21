import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'
import { SchoolProvider } from '../Context/SchoolContext'
import AuthProvider from '../Context/AuthContext'
import { AnnouncementProvider } from '../Context/AnnouncementContext'
import { RecoilRoot } from 'recoil'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { EducatorProvider } from '../Context/EducatorContext'


function MyApp({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
    <DndProvider backend={HTML5Backend}>
      <AuthProvider>
        <SchoolProvider>
          <EducatorProvider>
            <AnnouncementProvider>
              <SnackbarProvider>
                <Component {...pageProps} />
              </SnackbarProvider>
            </AnnouncementProvider>
          </EducatorProvider>
        </SchoolProvider >
      </AuthProvider >
    </DndProvider>
  </RecoilRoot>
}

export default MyApp
