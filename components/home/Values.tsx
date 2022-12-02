import React, { useEffect } from 'react'
import { GiArcheryTarget } from 'react-icons/gi';
import { BsFillGearFill } from 'react-icons/bs';
import { IoIosRocket } from 'react-icons/io';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { useMemo } from 'react';

interface Props{
  appLang: string,
  ssrLisCh: boolean
}


function Values(props: Props) {
  const DT = require('../../App.json');
  const {appLang, ssrLisCh} = props;  
  const valuesIcons = [<GiArcheryTarget />, <BsFillGearFill />, <IoIosRocket />];
  

  const valuesDelay: number[] = [ 0.3, 0.1, 0.3 ];
  
  const valuesVariants: Variants = {
    hidden: { opacity: 0,   y: 35 },
    visible: {
      opacity: [ 0, 0.4, 0.9, 0.5, 1 ],
      y: [35, 0],
    }
  }
  
  const valuesVariantsSm: Variants = {
    hidden0: { opacity: 0,   x: 50 },
    visible0: { opacity: 1,   x: 0 },

    hidden1: { opacity: 0,   scale: 0.2 },
    visible1: { opacity: 1,   scale: 1 },

    hidden2: { opacity: 0,   x: -50 },
    visible2: { opacity: 1,   x: 0 }
  }

  const [valVr, setValVr] = useState({...valuesVariants});
  const [valInit, setValInit] = useState('hidden');
  const [valAnmy, setValAnmy] = useState('visible');


  useMemo( () => {
    if( typeof window !== 'undefined' ){
      if( window.innerWidth > 768 ){  
        setValVr({...valuesVariants});
        setValInit('hidden');
        setValAnmy('visible');
      }else{
        setValVr({...valuesVariantsSm});
        setValInit('hidden-sm');
        setValAnmy('visible-sm');
      }
  
      window.onresize = () => {
          if( window.innerWidth > 768 ){  
            setValVr({...valuesVariants});
            setValInit('hidden');
            setValAnmy('visible');
          }else{
            setValVr({...valuesVariantsSm});
            setValInit('hidden-sm');
            setValAnmy('visible-sm');
          }    
      }
    }
  }, [] );

  return (
    <section id="values">
        <h2 className='sectionLgHead'>{DT[appLang].values.head}</h2>
          <div className="valuesWrap">
            {
              DT[appLang].values.items.map( (vl: string[], v: number) => {
                return( ssrLisCh &&
                  <motion.div className="valueItem" key={v}
                  variants={(typeof window != 'undefined' && localStorage.getItem('homeAnmy') === '0') ? valVr : {}}
                    initial={ (valInit == 'hidden-sm') ? `hidden${v}` : valInit }
                    whileInView={ (valAnmy == 'visible-sm') ? `visible${v}` : valAnmy }
                    viewport={{ once: true }}
                    transition={{ delay: valuesDelay[v], duration: 0.3 }}          
                  >
                    <h6 className='mb-0'> <>{valuesIcons[v]}</> {vl[0]} </h6>
                  </motion.div>
                )
              } )                
            }
          </div>
    </section>
  )
}

export default Values