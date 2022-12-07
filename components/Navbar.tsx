import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logoImg from '../assets/images/logo.png';

interface Props{
    appLang: string, 
    setAppLang: Function
}

function Navbar(props: Props) {    
    const DT = require('../App.json');  
    const {appLang, setAppLang} = props;    

    const handelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAppLang(`${(e.target as Element).textContent}`);
        (document.querySelector('html') as HTMLElement).setAttribute('lang', `${(e.target as Element).getAttribute('data-lang')}`);
        (document.querySelector('main') as HTMLElement).style.direction = `${(e.target as Element).getAttribute('data-dir')}`;
        
        (e.target as Element).classList.add('transWrap_langActive');
        const btn = document.querySelector('button.toTop');
        if((e.target as Element).textContent === 'EN') {
            (btn as HTMLButtonElement).classList.add('toTopRight');
            (btn as HTMLButtonElement).classList.remove('toTopLeft');
            ((e.target as Element).previousSibling as Element).classList.remove('transWrap_langActive');
            
        }else{
            (btn as HTMLButtonElement).classList.remove('toTopRight');
            (btn as HTMLButtonElement).classList.add('toTopLeft');
            ((e.target as Element).nextSibling as Element).classList.remove('transWrap_langActive');
        }        
    };
    
    const handelPageClick = () => {
        if(typeof window !== 'undefined'){
            localStorage.setItem('homeAnmy', 
                localStorage.getItem('homeAnmy') == null
                ? '0'
                :(parseInt(localStorage.getItem('homeAnmy') as string)+1).toString()
            );
            localStorage.setItem('teamAnmy', 
                localStorage.getItem('teamAnmy') == null
                ? '0'
                :(parseInt(localStorage.getItem('teamAnmy') as string)+1).toString()
            );
        } 
    }    

    const handelPagLinkOver = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { 
        if((e.target as Element).classList.contains('navActive') == false){
            (e.target as Element).classList.remove('PagLinkAnmyOut');  
            (e.target as Element).classList.add('PagLinkAnmyIn'); 
        }
    }
    const handelPagLinkOut = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { 
        if((e.target as Element).classList.contains('navActive') == false){
            (e.target as Element).classList.remove('PagLinkAnmyIn');  
            (e.target as Element).classList.add('PagLinkAnmyOut'); 
        }
    }
  
    const router = useRouter();

    
  return (
    <nav>
        <div className="logoWrap">
            <Image src={logoImg} alt="Logo" className='img-fluid'/>
        </div>
        <div className="mainNav">
            <div className="linksWrap">
                <Link href={'/'} className={`${router.pathname === '/' ? 'navActive' : ''}`} onMouseOver={ (event) => handelPagLinkOver(event)}  onMouseLeave={ (event) => handelPagLinkOut(event)}  onClick={handelPageClick} > { DT[appLang].nav[0] } </Link>
                <Link href={'/team'} className={`${router.pathname === '/team' ? 'navActive' : ''}`} onMouseOver={ (event) => handelPagLinkOver(event)}  onMouseLeave={ (event) => handelPagLinkOut(event)}  onClick={handelPageClick} > { DT[appLang].nav[1] } </Link>
            </div>

            <div className="transWrap">
                <button data-lang='ar' data-dir='rtl' onClick={(e) => handelClick(e)}>AR</button>
                <button data-lang='en' data-dir='ltr' className='transWrap_langActive' onClick={(e) => handelClick(e)}>EN</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar