import React from 'react'

import {FaQuoteLeft, FaStar} from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';

import testmon1 from '/assets/images/testimonials1.jpg';
import testmon2 from '/assets/images/testimonials2.jpg';
import testmon3 from '/assets/images/testimonials3.jpg';
import testmon4 from '/assets/images/testimonials4.jpg';
import testmon5 from '/assets/images/testimonials5.jpg';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
interface Props{
    appLang: string,
    ssrLisCh: boolean
}


function Testimonials(props: Props) {
    const DT = require('../../App.json');
    const {appLang, ssrLisCh} = props;  
    const testmonAvts = [testmon1, testmon2, testmon3, testmon4, testmon5];

    const settings = {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 500,
        cssEase: "linear",
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const testiVariants: Variants = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0,
            transition: { delay: 0.4, duration: 0.35 },
        }
    }
  

  return (  
    <>{ ssrLisCh &&
    <motion.section id="testimonials" className='container-fluid'       
        variants={(typeof window != 'undefined' && localStorage.getItem('homeAnmy') === '0') ? testiVariants : {}}
        initial='hidden'    whileInView='visible'
        viewport={{ once: true }}
    >
        <h2 className="sectionLgHead">{DT[appLang].testmonials.head}</h2>
        <Slider {...settings} className='testimonialsSlider'>
          {
            DT[appLang].testmonials.testmons.map( (tstm: [number, String, string], tm:  number) => {
                return(
                    <div className="testmonial" key={tm}>
                        <FaQuoteLeft />
                        <p className='my-2'>{tstm[2]}</p>
                        <div className="testmonial_bio">
                            <Image src={testmonAvts[tm]} alt="testmonial person" />
                            <h6 className='mb-0'>{tstm[1]}</h6>
                            <span>Developer</span>
                            <div className="starsWrap">
                                {
                                    tstm[0] === 1 ? <> <FaStar /> </>
                                    : tstm[0] === 2 ? <> <FaStar /> <FaStar /> </>
                                    : tstm[0] === 3 ? <> <FaStar /> <FaStar /> <FaStar /> </>
                                    : tstm[0] === 4 ? <> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </>
                                    : tstm[0] === 5 && <> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></>
                                }
                            </div>
                        </div>
                    </div>
                )
            } )
          }
        </Slider>
    </motion.section>
    }</>
  )
}

export default Testimonials