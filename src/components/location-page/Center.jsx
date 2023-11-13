import React from 'react'
import Nav from './location-nav/Nav'
import Group from './group1/Group'
import Group2 from './group2/Group2'
import Group3 from './group3/Group3'
import Group4 from './group4/Group4'
import Group5 from './group5/Group5' 
import Footer from './location-footer/Footer'


const Center = () => {
   
  return (
    <>
        <Nav />
        <Group />
        <Group2 />
        <Group3 />
        <Group4 />
        <Group5 />
        <Footer />
    </>
  )
}

export default Center