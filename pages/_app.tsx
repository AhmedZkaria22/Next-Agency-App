import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.min.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Layout from '../components/Layout';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useMemo( () => {
    if( typeof window !== 'undefined' && document != null ){
      (document.querySelector('html') as HTMLElement).setAttribute('lang', 'en');
      localStorage.setItem('homeAnmy', '0');
      window.addEventListener('load', ()=>{localStorage.setItem('homeAnmy', '0')});
      localStorage.setItem('teamAnmy', '0');
      window.addEventListener('load', ()=>{localStorage.setItem('teamAnmy', '0')});
    }
  },[] );
  
  
  const [appLang, setAppLang] = useState('EN');
  const router = useRouter();

  const getLayout = Component.getLayout ?? ( (page) => page );

  const [ssrLis, setSsrLis] = useState(false);
  useEffect( ()=>{      
    setSsrLis(true);
  }, [ssrLis] )


  return(
  <>
    <Head>
      <title> Next | Agency App </title>
      <meta charSet="utf-8" />
      <link rel='icon' href='/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#48B774" />
      <meta name="description" content="Ahmed Zakaria Next React Agency App : built using react.js, next.js, framer motion 
        , scss and data json file to handle multi languages with dribbble inspiration" />      
      <meta name="keywords" content=" ahmed zakaria, react app, react.js, agency app,  
        framer motion, scss, json, multi languages, multi languages, dribbble, 
        elzero, alfy, ahmed alaa, ayatoullah ramzy, samar tekaya" />
      <meta property="og:site_name" content="Next React Agency app" />
    </Head>
    <main>
      {
        router.pathname === '/404'
        ? <Component {...pageProps} />
        :getLayout(
          <Layout appLang={appLang}  setAppLang={setAppLang} >
           <Component {...pageProps} appLang={appLang} setAppLang={setAppLang} ssrLisProp={ssrLis} />
          </Layout>
        )
      }
    </main>
  </>
  )

}

