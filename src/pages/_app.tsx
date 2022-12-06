import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { useEffect } from 'react'
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux'
import { store } from './../redux/store'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    console.log('%c Welcome to eKOSORA console!!', 'color:#3f7cac;font-weight:bold; font-size:25px;');
    
  }, [])

  return <RecoilRoot>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </RecoilRoot>
}

export default MyApp
