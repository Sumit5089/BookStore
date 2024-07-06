import React from 'react'
import Contactus from '../components/Contactus'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
         <Navbar/>
            <div className='min-h-screen'>
                <Contactus/>
            </div>
            <Footer/>
    </>
  )
}

export default Contact