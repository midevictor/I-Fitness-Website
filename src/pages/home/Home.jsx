import React from 'react'
import MainHeader from '../../components/MainHeader'
import FAQs from '../../components/FAQs'  
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import Testimonials from '../../components/Testimonials'
import Footer from "../../components/Footer"
import "./Home.css"

function Home() {
  return (
    <div>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
