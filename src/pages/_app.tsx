import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useEffect } from 'react'
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux'
import { store } from './../redux/store'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {


  const router = useRouter()
  useEffect(() => {
    console.log('%c Welcome to eKOSORA console!!', 'color:#3f7cac;font-weight:bold; font-size:25px;');
    // return router.push("/auth/login")
  }, [])

  return <RecoilRoot>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </Provider>
  </RecoilRoot>
}

export default MyApp
