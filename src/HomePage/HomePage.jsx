import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import HeaderComponent from '../Components/HeaderComponent/HeaderComponent'
import OurProcess from '../Components/OurProcess/OurProcess'
import OurServices from '../Components/OurServices/OurServices'
import ProjectIdea from '../Components/ProjectIdea/ProjectIdea'
import TakeAMoment from '../Components/TakeAMoment/TakeAMoment'

const HomePage = () => {
  return (
    <>
    <Header/>
    <HeaderComponent/>
    <TakeAMoment/>
    <OurServices/>
    <OurProcess/>
    <ProjectIdea/>
    <Footer/>
    {/* <Our */}
    </>

  )
}

export default HomePage