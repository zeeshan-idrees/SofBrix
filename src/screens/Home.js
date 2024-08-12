import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Feature from '../components/Feature'
import Discover from '../components/Discover'
import Service from '../components/Service'
import Team from '../components/Team'
import Project from '../components/Project'
import Project2 from '../components/Project2'
import Client from '../components/Client'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='home ' id='home'>
      <Navbar/>
      <Main/>
      <Feature/>
      <Discover/>
      <Service/>
      <Team/>
      <Project/>
      <Client/>
      <Contact/>
      <Footer/>
      {/* <Project2/> */}
    </div>
  )
}
