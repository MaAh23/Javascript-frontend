import React from 'react'

import Main from '../component/Main/Main'
import Footer from '../component/Footer/Footer'
import Showcase from '../component/Showcase/Showcase'
import Navigation from '../component/Navigation/Navigation'




const Home = () => {
  return (
   <>
     <Navigation />
     <Showcase/>
     <Main />
     <Footer />
   </>
  )
}

export default Home