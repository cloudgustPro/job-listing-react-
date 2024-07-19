import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import NavBar from '../components/NavBar'
import JobListing from '../components/JobListing'
import ViewAllJob from '../components/ViewAllJob'


const HomePage = () => {
  return (
    <>
     <NavBar/>
      <Hero/>
      <HomeCard/>
      <JobListing isHome= {true}/>
      <ViewAllJob/>
    </>
  )
}

export default HomePage
