import Footer from 'Components/Footer/Footer'
import Navbar from 'Components/Navbar/Navbar'
import { Helmet } from "react-helmet";
import Team from 'Components/Team/Team'
import React from 'react'
import Warning from 'Components/Common/Warning';

function TeamPage() {
  return (
    <>
 <Helmet>
  <title>Team</title>
 </Helmet>
      <Navbar/>
        <Team/>
       
<Warning/>
   <Footer/>
    </>
    
  )
}

export default TeamPage