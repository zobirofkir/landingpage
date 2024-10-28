import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import SliderComponent from '../components/SliderComponent'
import ServiceComponent from '../components/ServiceComponent'
import AboutComponent from '../components/AboutComponent'
import ContactComponent from '../components/ContactComponent'

const HomeScreen = () => {
  return (
    <div>
        <HeaderComponent/>
        <SliderComponent/>
        <AboutComponent/>
        <ServiceComponent/>
        <ContactComponent/>
    </div>
  )
}

export default HomeScreen