import Head from 'next/head'
import React from 'react'
import Facts from '../components/home/Facts'
import Hero from '../components/home/Hero'
import Projects from '../components/home/Projects'
import Services from '../components/home/Services'
import Testimonials from '../components/home/Testimonials'
import Values from '../components/home/Values'

interface Props{
  appLang: string,
  ssrLisProp: boolean
}


function Home(props: Props) {
  const {appLang, ssrLisProp} = props;

  return (<>
  <Head>
    <meta property='og:title' content='Next | Agency App - Home Page' />
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://next-agency-app.vercel.app/' />
    <meta property='og:image' content='/home.png' />
    <meta property='og:description' content="Ahmed Zakaria Next React Agency App : built using react.js, next.js framer motion 
      , scss and data json file to handle multi languages with dribbble inspiration" />  
    <meta property="og:keywords" content=" ahmed zakaria, next app, react app, react.js, agency app,  
      framer motion, scss, json, multi languages, multi languages, dribbble"/>
  
  </Head>
    <section id="Home">        
        <Hero appLang = {appLang}/>
        <Services appLang = {appLang} ssrLisCh={ssrLisProp}/>
        <Facts appLang = {appLang} ssrLisCh={ssrLisProp}/>
        <Projects appLang = {appLang} ssrLisCh={ssrLisProp}/>
        <Values appLang = {appLang} ssrLisCh={ssrLisProp}/>
        <Testimonials appLang = {appLang} ssrLisCh={ssrLisProp}/>
    </section>
    </>)
}

export default Home