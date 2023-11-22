import React from 'react'
import Head from './header-nav/Head'
import Page from './page1/Page'
import Page2 from './page2/Page2'
import Page3 from './page3/Page3'
import Page4 from './page4/Page4'
import Foot from './footer/Foot'

const Common = () => {
  return (
    <>
       <Head /> 
       <Page />
       <Page2 />
       <Page3 />
       <Page4 />
       {/* <MobileMenu /> */}
       <Foot />
    </>
  )
}

export default Common