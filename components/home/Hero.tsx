import Image from 'next/image';
import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import heroImg from '../../assets/images/services2.jpg';
import Clients from './Clients';
interface Props {
  appLang: string
}


function Hero(props: Props) {
  const DT = require('../../App.json');
  const {appLang} = props;
  const handelArrowAnmyIn = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { (e.target as Element).classList.remove('arrowAnmyOut');  (e.target as Element).classList.add('arrowAnmyIn'); }
  const handelArrowAnmyOut = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { (e.target as Element).classList.remove('arrowAnmyIn');  (e.target as Element).classList.add('arrowAnmyOut'); }
  
  if( typeof window !== 'undefined' && document != null && appLang === 'EN' ){
    (document.querySelector(':root') as any).style.setProperty('--langLis', '1')  
  }
  if( typeof window !== 'undefined' && document != null && appLang === 'AR' ){
    (document.querySelector(':root') as any).style.setProperty('--langLis', '-1')  
  }

  return (
    <section id="hero">
      <div className="heroContent">
        <h1>{DT[appLang].hero[0]}</h1>
        <p> {DT[appLang].hero[1]} <a href='https://dribbble.com/shots/14808491-Allies-Creative-Agency-Landing-Page/attachments/6515991?mode=media' target='_blank' rel="noreferrer">dribbble</a>  {DT[appLang].hero[2]} </p>
        <a href='#services' className='btn sectionBtn' 
          onMouseOver={ (event) => handelArrowAnmyIn(event)}  
          onMouseLeave={ (event) => handelArrowAnmyOut(event)}
        > {DT[appLang].hero[3]} 
          <span>{ appLang === 'EN' ?  <BiChevronRight/>  : <BiChevronLeft/> }</span> 
        </a>        
      </div>

      <div className="heroImg">
        <Image src={heroImg} alt="heroImg" className='img-fluid' priority={true} />
      </div>

      <Clients />
    </section>    
  )
}

export default Hero