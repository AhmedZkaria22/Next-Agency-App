import React, { ReactNode, useEffect } from 'react';
import prj1 from '/assets/images/ui1.png';
import prj2 from '/assets/images/ui2.png';
import prj3 from '/assets/images/mobile.png';
import prj4 from '/assets/images/marketing1.png';
import prj5 from '/assets/images/marketing2.png';
import prj6 from '/assets/images/marketing3.png';
import prj7 from '/assets/images/web1.png';
import prj8 from '/assets/images/web2.png';
import prj9 from '/assets/images/web3.png';

import { TbPaperBag, TbColorSwatch, TbTarget } from 'react-icons/tb';
import {MdOutlinePhoneIphone} from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { motion, Variants} from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { Placement } from 'react-bootstrap/esm/types';



interface ProjectSmBtns_Props{
    ndx: number, 
    ssrLisProp: boolean | any,
    children: ReactNode
}

export function ProjectSmBtns(props: ProjectSmBtns_Props){
    const {ndx, ssrLisProp, children} = props;
    const projTpDelay = [ 0.5, 0.8, 1.1, 1.4, 1.7 ];
    return( 
        ssrLisProp &&
        <motion.button 
            initial={{ y: -50, opacity: 0 }}
            whileInView= {{  y: 0, opacity: 1 }}
            transition= {{ delay: projTpDelay[ndx], duration: 0.4, type: 'tween' }}
            viewport={{ once: true }}
        >
            {children}
        </motion.button>        
    )
}

interface Props {
    appLang: string,
    ssrLisCh: boolean
}


function Projects(props: Props) {
    const DT = require('../../App.json');
    const {appLang, ssrLisCh} = props;  
    const projectsImgs = [prj1, prj2, prj3, prj4, prj5, prj6, prj7, prj8, prj9];

    type projectsImgsObjIntf = {
        [key: string]: StaticImageData[];
    };

    const projectsImgsObj: projectsImgsObjIntf = {
        "ui_&_ux_design": ([prj1, prj2] as StaticImageData[]), 
        "mobile_apps": ([prj3]  as StaticImageData[]), 
        "marketing": ([prj4, prj5, prj6]  as StaticImageData[]),
        "web_development": ([prj7, prj8, prj9]  as StaticImageData[]),
                            
        "واجهة_و_تجربة_المستخدم": ([prj1, prj2]  as StaticImageData[]), 
        "تطبيقات_جوال": ([prj3]  as StaticImageData[]), 
        "تسويق": ([prj4, prj5, prj6]  as StaticImageData[]),
        "تطوير_ويب": ([prj7, prj8, prj9] as StaticImageData[]) 
    };

    const [projectsState, setProjects] = useState(DT[appLang].projects.items);
    const [projectTypeState, setProjectType] = useState("all");

    const handelFilter = (e: React.MouseEvent<HTMLButtonElement| HTMLElement>|any, val: string) => {
        if((e.target.parentElement as SVGElement).nodeName === 'svg' || (e.target as SVGElement).nodeName === 'svg'){
            (val === "all" || val === "كل") 
                ? 
                    setProjects(DT[appLang].projects.items)
                :
                    setProjects( () => DT[appLang].projects.items.filter( (item: String[]) => item[2] === val.replace(/_/g, " ") ) );
                    setProjectType(val);
        }

    };        
    
    const handelFilterPort = (e: React.MouseEvent<HTMLButtonElement| HTMLElement>|any, val: string) => {
        if(e.target.parentElement.nodeName == 'svg' || e.target.nodeName == 'svg'){
            (val === "all" || val === "كل") 
                ? 
                    setProjects(DT[appLang].projects.items)
                : 
                    setProjects( () => DT[appLang].projects.items.filter( (item: String[]) => item[2] === val.replace(/_/g, " ") ) );
                    setProjectType(val);
    
            let projectSpans: NodeListOf<Element> = document.querySelectorAll('.projectsControllPort button span');
            for (const spn of projectSpans) {
                spn.classList.remove('spanActive');
            }
            
            
            if(e.target.parentElement.nodeName == 'svg'){
                e.target.parentElement.nextElementSibling.classList.add('spanActive');
            }
            if(e.target.nodeName == 'svg'){
                e.target.nextElementSibling.classList.add('spanActive');
            }
        }

    };

    const projectsIcons = [<TbPaperBag/>, <TbColorSwatch />, <MdOutlinePhoneIphone />, <TbTarget />, <FaLaptopCode />];
    
    const tooltipsPlace: string[] | Placement[] | any[] = [`top`, `right`, `bottom`, `left`, `top`];
    
    const projTpDelay = [ 0.1, 0.2, 0.3, 0.4, 0.5 ];
    
    const projDelay = [ 0.2, 0.4, 0.6, 0.6, 0.4, 0.2, 0.2, 0.4, 0.6 ];

    const btnLandVr: Variants = {
        hidden: { y: -50, opacity: 0 },
        visible: (ndx: number) => ({ y: 0, opacity: 1, 
            transition: { delay: projTpDelay[ndx], duration: 0.4, type: 'tween' }
        })
    }

    const prjVariant: Variants = {
        hidden06: { opacity: 0, scale: 0, x: -35 },
        hidden345: { opacity: 0, scale: 0, x: 35 },

        visible: { opacity: 1, scale: 1, x: 0 },

        hiddenOdd: { opacity: 0, scale: 1, x: -50 },
        hiddenEvn: { opacity: 0, scale: 1, x: 50 }
    };

    const [showProjects, setShowProjects] = useState(false);
    useEffect( ()=>{
        setShowProjects(true);
    }, [showProjects] )


  return (
    <section id='projects' className='container-fluid'>

        <h2 className='sectionLgHead'>{DT[appLang].projects.head}</h2>

        <div className="projectsControll projectsControllLand">
            {
                DT[appLang].projects.type.map( (prt: string|any, pt: number) => {
                    return(
                        <OverlayTrigger
                            placement={tooltipsPlace[pt]}
                            delay={{ show: 75, hide: 50 }}
                            overlay = { <Tooltip id={`button-tooltip-${pt}`}> { prt.replace(/_/g, " ") } </Tooltip> }
                            key={pt}                       
                        >
                            <>{ssrLisCh && <motion.button
                                variants={(typeof window != 'undefined' && localStorage.getItem('homeAnmy') === '0') ? btnLandVr : {}}
                                initial='hidden'    whileInView='visible'    viewport={{ once: true }}     
                                custom={pt}     onClick={ (e) => {handelFilter(e, prt);} } 
                            > <>{projectsIcons[pt]}</> </motion.button>}</>
                        </OverlayTrigger>
                    )
                } )
            }
        </div>

        <div className="projectsControll projectsControllPort">
            <ProjectSmBtns ndx={0}  ssrLisProp={ssrLisCh}> <TbPaperBag onClick={ (e) => {handelFilterPort(e, DT[appLang].projects.type[0] );} }/> <span>{DT[appLang].projects.type[0].replace(/_/g, " ")}</span> </ProjectSmBtns>
            <ProjectSmBtns ndx={1}  ssrLisProp={ssrLisCh}> <TbColorSwatch onClick={ (e) => {handelFilterPort(e, DT[appLang].projects.type[1] );} }/> <span>{DT[appLang].projects.type[1].replace(/_/g, " ")}</span> </ProjectSmBtns>
            <ProjectSmBtns ndx={2}  ssrLisProp={ssrLisCh}> <MdOutlinePhoneIphone onClick={ (e) => {handelFilterPort(e, DT[appLang].projects.type[2] );} }/> <span>{DT[appLang].projects.type[2].replace(/_/g, " ")}</span> </ProjectSmBtns>
            <ProjectSmBtns ndx={3}  ssrLisProp={ssrLisCh}> <TbTarget onClick={ (e) => {handelFilterPort(e, DT[appLang].projects.type[3] );} }/> <span>{DT[appLang].projects.type[3].replace(/_/g, " ")}</span> </ProjectSmBtns>
            <ProjectSmBtns ndx={4}  ssrLisProp={ssrLisCh}> <FaLaptopCode onClick={ (e) => {handelFilterPort(e, DT[appLang].projects.type[4] );} }/> <span>{DT[appLang].projects.type[4].replace(/_/g, " ")}</span> </ProjectSmBtns>
        </div>
 
        <div className="row projectsWrap">
            {
                projectsState.map( (prj: string, pj:number) => {
                    return(
                        (showProjects && ssrLisCh) &&
                        <motion.div className="projectsWrap__item" key={pj}  custom={pj}    
                            variants={(typeof window != 'undefined' && localStorage.getItem('homeAnmy') === '0') ? prjVariant : {}}
                                initial = { 
                                    (pj >= 3 && pj <= 5 && window.innerWidth > 768) ? 'hidden345' 
                                    : ((pj < 3 || pj > 5) && window.innerWidth > 768) ? 'hidden06' 
                                    : ( (pj % 2 == 0 && window.innerWidth <= 768) ) ? 'hiddenOdd'
                                    : ( (pj % 2 == 1 && window.innerWidth <= 768) ) && 'hiddenEvn'
                                }
                                whileInView='visible'
                                transition={{ duration: 0.6, ease: 'linear' , 
                                delay: (window.innerWidth > 768) ? projDelay[pj] : 0.2 }}
                                viewport={{ once: true }}
                        >                            
                            {
                                projectsState.length === 9 
                                ? <Image src={projectsImgs[pj]} alt={`project${pj}-img`} className='img-fluid' />
                                : <Image src={projectsImgsObj[projectTypeState][pj]} alt={`project${pj}-img`} className='img-fluid' />
                            }                            
                            <div className="infoWrap">
                                { 
                                    prj[0] == 'ui ux' 
                                    ? <p className='mb-0' style={{ textTransform: 'uppercase' }}>{prj[0]}</p>
                                    : <p className='mb-0'>{prj[0]}</p>
                                }
                                <div className="svgWrap">
                                    <a href={prj[1]} target='_blank'> <TbPaperBag /> </a>
                                </div>
                            </div>
                        </motion.div>
                    )
                } )
            }
        </div>
        
    </section>
  )
}

export default Projects