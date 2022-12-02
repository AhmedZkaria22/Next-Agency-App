import React from 'react';
import {TiLink, TiSocialLinkedin} from 'react-icons/ti';
import { motion, Variants } from 'framer-motion';
import { useMemo } from 'react';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props{
  member: {
    name: string,
    job: string,
    bio: string,
    social: {
    official: string,
    linkedIn: string
    }
  },
  m: number, 
  memImg: string | StaticImageData,
  ssrLisCh: boolean
}

function TeamMember(props: Props) {
  const { member, m, memImg, ssrLisCh } = props;
  const memberVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  };

  const [memberDelay, setMemberDelay] = useState([ 0.2, 0.5, 0.8, 0.1, 0.4, 0.7 ]);

  useMemo( () => {
    if( typeof window !== 'undefined' && window.innerWidth >= 820 ){  
      setMemberDelay([0.2, 0.5, 0.8, 0.1, 0.4, 0.7]);
    }else if ( typeof window !== 'undefined' && window.innerWidth >= 480.01 && window.innerWidth < 820 ){
      setMemberDelay([0.2, 0.5, 0.2, 0.5, 0.2, 0.5]);
    }else{
      setMemberDelay([0.2, 0.2, 0.2, 0.2, 0.2, 0.2]);
    }
  },[] );



  return (
    <>{
      ssrLisCh &&
      <motion.div key={m} className="Team_members_item"      
        variants={(typeof window != 'undefined' && localStorage.getItem('teamAnmy') === '1') ? memberVariants : {}}
        custom={m}  viewport={{ once: true }}
        initial='hidden'    whileInView='visible'  
        transition= {{ delay: memberDelay[m], duration: 0.4 }}
      >
        <div className="Team_members_item_fig">
          <Image src={memImg} alt={`Member-${m} photo`} />
          <h3>{member.name}</h3>
          <h6>{member.job}</h6>
        </div>
          <p>{member.bio}</p>
          <div className="Team_members_item_links">
              <a href={member.social.official} target='_blank' title='official'><TiLink /> </a>
              <a href={member.social.linkedIn} target='_blank' title='linkedIn'><TiSocialLinkedin /></a>
          </div>
      </motion.div>
    }</>
  )
}

export default TeamMember