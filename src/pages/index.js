/* eslint-disable @next/next/no-sync-scripts */
import React from 'react'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Footer from './components/Footer'
const index = () => {
  return (
    <div className='h-[100vh] w-[100vw]'>
    <Hero/>
    <Feature/>
    <Footer/>
    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
  )
}

export default index
