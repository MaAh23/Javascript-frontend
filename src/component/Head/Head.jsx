import React from 'react'
import './Head.css'
import img_head from '../../assets/images/Rectangle 607.svg'

const Head = () => {
  return (
    <section className="contact-showcase">
        <div className="container">
            <div className="text">
                <p>Home</p>
                <p>Contact</p>
            </div>
            <div className="rubrik">
                <h1>Let's Connect</h1>
            </div>
        </div>
         <img className="contact-pic" src={img_head} alt=""/>
    </section>
  )
}

export default Head