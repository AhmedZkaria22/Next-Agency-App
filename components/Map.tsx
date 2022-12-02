import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  contactVariants: object | any
}

function Map(props: Props) {
  const {contactVariants} = props;  
  return (
    <motion.section id="map"    
    variants={(typeof window != 'undefined' && parseInt(localStorage.getItem('teamAnmy') as string) <= 1) ? contactVariants : {}}   
      viewport={{ once: true }}    initial='hidden'    whileInView='visible'
    >
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6820.9166304376695!2d30.005213399999985!3d31.263415500000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1669575491686!5m2!1sen!2seg" 
        frameBorder="0"  title='Landing-map'  id="map_canvas" className="wow bounceInDown animated animated" data-wow-duration="500ms" 
      ></iframe>
    </motion.section>
  )
}

export default Map