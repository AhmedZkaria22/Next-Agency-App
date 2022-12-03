import React, { useMemo, useRef, useState } from 'react';
import {motion, Variants, } from 'framer-motion';
import { useEffect } from 'react';
interface Props {
    appLang: string,
    ssrLisCh: boolean
}


const Facts = (props: Props) => {
    const DT = require('../../App.json');
    const {appLang, ssrLisCh} = props;  

    const factWrap = useRef<Element | undefined | any>(null);    
    // const obsOption: Object = {
    //     root: null,  threshold: 0, rootMargin: "0px"
    // }

    const obsOption: IntersectionObserverInit = {...useMemo( () => { return {root: null,  threshold: 0, rootMargin: "0px"} as object }, [] )}
    
    const [ssrLis, setSsrLis] = useState(false);
    useEffect( () => {
        setSsrLis(true);
        let counters = document.querySelectorAll('#facts .fact') as NodeListOf<HTMLElement> ;
        let speed = 250;

        let counterObserver = new IntersectionObserver( (entries, observer) => {
            let [entry] = entries;
            if( ! entry.isIntersecting ) return;
            
            
            for( let [index, counter] of counters.entries() ){
                const updateCounter = () => {
                    const targetNumber = +(counter.dataset.target as string) ;
                    const initialNumber = +(counter.textContent as string) ;
                    const initialPerCount = targetNumber / speed;
                    if( initialNumber < targetNumber ){                        
                        counter.textContent = `${Math.ceil(initialNumber + initialPerCount)}`; 
                        setTimeout(() => { 
                            updateCounter();
                            if( index <= 1 
                                && parseInt(counter.textContent as string) == targetNumber 
                                && (counter.textContent as string).indexOf('+') == -1 
                            ){ counter.textContent += "+" ; }
                        }, 50);                  
                    }
                }
                updateCounter();     
            } 

            }, obsOption);
            counterObserver.observe(factWrap.current as Element);

    }, [ssrLis, factWrap, obsOption]);

    const factVr: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1,     transition: { delay: 0.1, duration: 0.3 } }
    }


  return (
    <section id='facts' className='container-fluid' ref={factWrap}>
        <div className="row factsWrap">
            {
                DT[appLang].facts.map( (fct: string, f: number) => {
                    return( ssrLisCh &&
                        <motion.div
                            variants={(typeof window != 'undefined' && localStorage.getItem('homeAnmy') === '0') ? factVr : {}}
                            initial='hidden'    whileInView='visible'     viewport={{ once: true }}
                            className="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-3 factsWrap__item" key={f}                    
                        >
                            <p className='fact' data-target={parseInt(fct[0])}>0</p>
                            <p>{fct[1]}</p>
                        </motion.div>                        
                    )
                } )
            }
        </div>
    </section>
  )
}

export default Facts