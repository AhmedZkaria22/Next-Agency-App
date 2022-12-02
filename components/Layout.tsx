import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout ( {children, appLang, setAppLang}: { 
    children: ReactElement, appLang?: any, setAppLang?: any } ){

      const topRef = useRef<HTMLButtonElement>(null);
      const [ssrLis, setSsrLis] = useState(false);

      useEffect( () => {
        setSsrLis(true);
        window.addEventListener("scroll", function() {
          if (window.scrollY >= 180) {
            (topRef.current as HTMLButtonElement).classList.remove("toTopOut");
            (topRef.current as HTMLButtonElement).classList.add("toTopIn");
            setTimeout(() => {
              (topRef.current as HTMLButtonElement).style.opacity = '1';
            }, 400);
          } else {
              (topRef.current as HTMLButtonElement).style.opacity = '0';
              setTimeout(() => {
                (topRef.current as HTMLButtonElement).classList.add("toTopOut");
                (topRef.current as HTMLButtonElement).classList.remove("toTopIn");
              }, 400);
          }
        });
      }, [])

      const handelToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"          
        });       
      }
      
    return(<>
      <Navbar appLang={appLang} setAppLang = {setAppLang} />
      {children}
      <Contact appLang={appLang} ssrLisCh={ssrLis} />
      <Footer /> 
      <button className="toTop toTopOut" onClick={handelToTop} ref={topRef}><BiChevronUp /></button>
    </>)
  }

export default Layout