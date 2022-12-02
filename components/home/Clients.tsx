
import Image from 'next/image';
import React, { useEffect, useMemo, useRef } from 'react';
import Slider from 'react-slick';
import client1 from '../../assets/images/client1.png';
import client2 from '../../assets/images/client2.png';
import client3 from '../../assets/images/client3.png';
import client4 from '../../assets/images/client4.png';
import client5 from '../../assets/images/client5.png';
import client6 from '../../assets/images/client6.png';
import client7 from '../../assets/images/client7.png';
import client8 from '../../assets/images/client8.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Clients() {
    const settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: -2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [{
                breakpoint: 992,
                settings: {
                    dots: false,
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    initialSlide: -2,
                    speed: 500,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: -2,
                    speed: 500,
                }
            }
        ]
    };

    const clientSec = useRef<HTMLElement>(null);

    useMemo( () => {
        if(typeof window !== 'undefined' && document != null){            
            if( (document.querySelector('html') as HTMLElement).getAttribute('lang') == 'ar' && clientSec.current != null ){
                (clientSec.current as HTMLElement).classList.add('ClientsLang');
            }else if( (document.querySelector('html') as HTMLElement).getAttribute('lang') == 'en' && clientSec.current != null ){
                (clientSec.current as HTMLElement).classList.remove('ClientsLang');
            }            
        }
    }, [] );

    useEffect( () => {
        if( (document.querySelector('html') as HTMLElement).getAttribute('lang') == 'ar' && clientSec.current != null ){
            (clientSec.current as HTMLElement).classList.add('ClientsLang');
        }else if( (document.querySelector('html') as HTMLElement).getAttribute('lang') == 'en' && clientSec.current != null ){
            (clientSec.current as HTMLElement).classList.remove('ClientsLang');
        }
    }, [typeof window !== 'undefined' , (document.querySelector('html') as HTMLElement).getAttribute('lang')] );


    return (
        <section id='clients' ref={clientSec}>
        <Slider {...settings} className='clientsSlider'>
            <Image src={client1} alt="client1Img" className='w-50'/>
            <Image src={client2} alt="client2Img" className='w-50'/>
            <Image src={client3} alt="client3Img" className='w-50'/>
            <Image src={client4} alt="client4Img" className='w-50'/>
            <Image src={client5} alt="client5Img" className='w-50'/>
            <Image src={client6} alt="client6Img" className='w-50'/>
            <Image src={client7} alt="client7Img" className='w-50'/>
            <Image src={client8} alt="client8Img" className='w-50'/>
        </Slider>
    </section>
    )
}

export default Clients