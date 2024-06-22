import React from 'react'
import Partner from '../partner/Partner'
import Features from '../Features/Features'
import Company from '../Company/Company'
import Services from '../Service/Service'
import Project from '../Project/Project'
import Members from '../Members/Members'
import News from '../News/News'
import Update from '../Update/Update'


const Main = () => {
  return (
    <main>
        <Partner/>
        <Features/>
        <Company/>
        <Services/>
        <Project />
        <Members/>
        <News/>
        <Update/>
    </main>
  )
}

export default Main