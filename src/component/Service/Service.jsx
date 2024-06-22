import React from 'react'
import './Service.css'
import ChildBox from './ChildBox'
import ChildBoxSecend from './ChildBoxSecend'

const Service = () => {
  return (
 
    <section className="service">
            <div className="container">
                <div className="section-tittle">
                    <p>Our Services</p>
                    <h2>We Provide The Best Service For Consulting</h2>
                </div>
                <div className="parent-box">
                    <ChildBox title="Business Advice"  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                    <ChildBoxSecend title="Startup Business"  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                    <ChildBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
                    <ChildBox title="Risk managment"  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." />
                </div>
                <div className="center-content">
                    <a className="btn-black" href="project.html">Browse Services <i className="fa-solid fa-right-to-bracket"></i></a>
                </div>
            </div>
        </section>
  )
}

export default Service