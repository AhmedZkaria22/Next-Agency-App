import { motion, Variants } from 'framer-motion';
import React from 'react';
import Map from './Map';


interface Props {
  appLang: string,
  ssrLisCh: boolean
}

const Contact = (props:Props) => {
  const DT = require('../App.json');
  const {appLang, ssrLisCh} = props;


  const contactVariants : Variants = {    
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0,  transition: { delay: 0.2, duration: 1.0 } }
  }  

  return (
    <section id="contact">
        <h2 className="sectionLgHead h3">{DT[appLang].contact.head}</h2>
        <p>{DT[appLang].contact.form[0]}</p>
        
        <>{ ssrLisCh &&
          <motion.form action=""    
          variants={(typeof window != 'undefined' && parseInt(localStorage.getItem('teamAnmy') as string) <= 1) ? contactVariants : {}}
            viewport={{ once: true }}  initial='hidden'      whileInView='visible'    
          >
              <input type="text" placeholder={DT[appLang].contact.form[1]} />
              <input type="email" placeholder={DT[appLang].contact.form[2]} />
              <input type="text" placeholder={DT[appLang].contact.form[3]} />
              <textarea cols={30} rows={7} placeholder={DT[appLang].contact.form[4]}></textarea>
              <button type="submit">{DT[appLang].contact.form[5]}</button>
          </motion.form>
        }</>

        <p>{DT[appLang].contact.map}</p>
        <>{ ssrLisCh &&
          <Map  contactVariants={contactVariants} />
        }</>
    </section>
  )
}

export default Contact