import React from 'react'
import MainSection from '../components/MainSection'
import LogoSlider from '../components/LogoSlider'
import Features from '../components/Features'
import SocialShare from '../components/SocialShare'

function Home(props ) {
  return (
    <>
        <MainSection title1 ={props.title} />
        <LogoSlider />
        <Features />
        <SocialShare />
    </>
  )
}

export default Home