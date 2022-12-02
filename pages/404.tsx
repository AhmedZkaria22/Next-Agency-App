import React, {ReactElement} from 'react'
import { Variants, motion } from 'framer-motion';
import Layout from '../components/Layout';
import Link from 'next/link';
import mdStyle from '../styles/404.module.scss';

function Error() {

  const er404Vr: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.2 } }
  }

  const er404ChVr: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div className={mdStyle.ErrorPage}>
      <div className={mdStyle.errorWrap}>
        <motion.p variants={er404Vr}  initial='hidden'  whileInView='visible'  viewport={{ once: true }}
          className={mdStyle.er404}>404</motion.p>
        <motion.p variants={er404ChVr}  initial='hidden'  whileInView='visible'  viewport={{ once: true }} 
          transition={{ delay: 0.4,  duration: 0.2 }}
          className={mdStyle.vrLine}>|</motion.p>
        <motion.p variants={er404ChVr}  initial='hidden'  whileInView='visible'  viewport={{ once: true }} 
          transition={{ delay: 0.6,  duration: 0.5 }}
          className={mdStyle.erMsg}>Page not found</motion.p>
      
        <div className={mdStyle.backWrap}>
          <p className={mdStyle.er404}>404</p>
          <motion.p variants={er404ChVr}  initial='hidden'  whileInView='visible'  viewport={{ once: true }} 
            transition={{ delay: 0.8,  duration: 0.2 }}
            className={mdStyle.vrLine}>|</motion.p>
          
          <Link href={'/'} className={mdStyle.backLink}>
            <motion.span  variants={er404ChVr}  initial='hidden'  whileInView='visible'  viewport={{ once: true }} 
              transition={{ delay: 1.0,  duration: 0.5 }}>Back Home</motion.span>
          </Link>
        </div>
      </div>
    </div>
  )
}

Error.getLayout = function getLayout(page: ReactElement){
  return <Layout>{page}</Layout>
}

export default Error
