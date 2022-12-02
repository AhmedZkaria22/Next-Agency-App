import React, { useState, useMemo } from 'react'
import { TbColorSwatch, TbTarget } from 'react-icons/tb';
import {MdOutlinePhoneIphone} from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import { Resonsive_Framer_Motion } from '../../handelFramerMotion';



interface Props{
    appLang: string,
    ssrLisCh: boolean
}


function Services(props: Props) {
    const {appLang, ssrLisCh} = props;  
    const DT = require('../../App.json');

    const servicesIcons = [
        [ <TbColorSwatch key={0} /> ],
        [ <MdOutlinePhoneIphone key={1} /> ],
        [ <TbTarget key={2} /> ],
        [ <FaLaptopCode key={3} />  ]
    ];
            
    const servicesDelay: number[] = [ 0.1, 0.3, 0.5, 0.7 ];
    const [serviceVr, setServiceVr] = useState({ y: -50, opacity: 0 });
    const [serviceWrapVr, setServiceWrapVr] = useState({ y: 0, opacity: 1 });

    useMemo( () => {   
        Resonsive_Framer_Motion( 
            setServiceVr, { y: -50, opacity: 0 }, { y: 0, opacity: 1 },
            setServiceWrapVr, { y: 35, opacity: 0 }, { y: 0, opacity: 1 }
        );            
    },[] );

    const serviceVariants: Variants = {
        hidden: { ...serviceVr },
        visible: { y: 0, opacity: 1 }
    }

    const serviceWrapVariants: Variants = {
        hidden: { ...serviceWrapVr },
        visible: { y: 0, opacity: 1,  transition: { delay: 0.2, duration: 0.4 } }        
    }


  return (
    <section id='services'>
        <h6 className="sectionSmHead">{DT[appLang].services[0]}</h6>
        <div className="servicesHero">
            <h4>{DT[appLang].services[1]}</h4>
            <p>{DT[appLang].services[2]}</p>
        </div>
        <>{
            ssrLisCh &&
            <motion.div className="servicesWrap"            
                variants={ (typeof window !== 'undefined' && localStorage.getItem('homeAnmy') === '0' && window.innerWidth <= 768) ? serviceWrapVariants : {}}
                initial='hidden'     whileInView='visible'    
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}

            >{
                DT[appLang].services[3].items.map( (srv: string, s: number) => {
                    return(
                        <motion.div 
                        variants={(typeof window != 'undefined' && localStorage.getItem('homeAnmy') === '0' && window.innerWidth > 768) ? serviceVariants : {}}
                            initial='hidden'     whileInView='visible'
                            viewport={{ once: true }}   custom={s}
                            transition= {{ delay: servicesDelay[s], duration: 0.5 }}
                            className="servicesWrap__item" key={s}
                        >
                            <div className="svgWrap">{servicesIcons[s]}</div>
                            <h5>{srv[0]}</h5>
                            <p>{srv[1]}</p>
                        </motion.div>
                    )
                } )
            }</motion.div>
        }</>
    </section>
  )
}

export default Services