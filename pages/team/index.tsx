import React from 'react'

import osama from '/assets/images/osama.png';
import alaa from '/assets/images/alaa.png';
import alfy from '/assets/images/alfy.png';
import aya from '/assets/images/aya.png';
import samar from '/assets/images/samar.png';
import ahmed from '/assets/images/ahmed.png';
import Head from 'next/head';
import TeamMember from '../../components/team/TeamMember';



interface Props{
  appLang: string,
  ssrLisProp: boolean
}

function Team(props: Props) {
  const membersImgs = [ osama, alaa, alfy, aya, samar, ahmed ];
  const DT = require('../../App.json');
  const {appLang, ssrLisProp} = props;  

  return (<>
    <Head>
      <meta property='og:title' content='Next | Agency App - Team Page' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://next-agency-app.vercel.app/team' />
      <meta property='og:image' content='/team.png' />
      <meta property='og:description' content="Ahmed Zakaria Next React Agency Team : 
        We built a great team that delivers complete solutions to companies and clients" />  
      <meta property="og:keywords" content=" ahmed zakaria, next app, react app, react.js, 
        agency app, elzero, alfy, ahmed alaa, ayatoullah ramzy, samar tekaya" />

    </Head>  
    <section id="Team">
        <h1>{DT[appLang].team.head}</h1>
        <h2>{DT[appLang].team.desc}</h2>
        <div className="Team_members">{
          DT[appLang].team.members.map((memberIt: object|any, m: number)=>{ return(
            <TeamMember key={m} member={memberIt} m={m} memImg={membersImgs[m]} ssrLisCh={ssrLisProp}/>
          )
          })
        }</div>
    </section>
    </>)
}

export default Team