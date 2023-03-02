import Footer from 'Components/Footer/Footer'
import Navbar from 'Components/Navbar/Navbar'
import React from 'react'
import Error from '../assets/error.png'

function notFound() {
  return (
    <>
    <Navbar/>
<section className='not-page'>
<img src={Error} alt='404'/>
</section>

    <Footer/>
    
   </>
  )
}

export default notFound