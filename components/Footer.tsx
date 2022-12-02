import React from 'react'
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import logoImg from '../assets/images/logo.png';
import Image from 'next/image';

function Footer() {
  return (
    <footer>
        <Image src={logoImg} alt='footerImg' className='img-fluid' />        

        <p>Montazah Alexandria, egypt</p>
        <p>nxt22agn@gmail.com</p>
        <p>+2001090761007</p>
        <div className="footerSocial">
            <a href='https://www.facebook.com/profile.php?id=100009428856148' target='_blank' title='facebook' rel="noopener noreferrer"><FaFacebookF /></a>
            <a href='https://twitter.com/AhmedZkaria15' target='_blank' title='twitter' rel="noopener noreferrer"><FaTwitter /></a>
            <a href='https://www.youtube.com/' target='_blank' title='youtube' rel="noopener noreferrer"><FaYoutube /></a>                
            <a href='https://www.pinterest.com/zikoser/_saved/' target='_blank' title='pinterest' rel="noopener noreferrer"><FaPinterest /></a>
            <a href='mailto:ahmedzkaria372017@gmail.com' target='_blank' title='gmail' rel="noopener noreferrer"><SiGmail /></a>
        </div>
    </footer>
  )
}

export default Footer