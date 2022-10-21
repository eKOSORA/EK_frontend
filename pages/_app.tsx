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
import { ParentProvider } from '../Context/ParentContext'
import { SettingProvider } from '../Context/SettingContext'
import { StudentProvider } from '../Context/StudentContext'


function MyApp({ Component, pageProps }: AppProps) {
  return <RecoilRoot>
    <DndProvider backend={HTML5Backend}>
      <AuthProvider>
        <SchoolProvider>
          <EducatorProvider>
            <ParentProvider>
              <StudentProvider>
                <SettingProvider>
                  <AnnouncementProvider>
                    <SnackbarProvider>
                      <Component {...pageProps} />
                    </SnackbarProvider>
                  </AnnouncementProvider>
                </SettingProvider>
              </StudentProvider>
            </ParentProvider>
          </EducatorProvider>
        </SchoolProvider >
      </AuthProvider >
    </DndProvider>
  </RecoilRoot>
}

export default MyApp
