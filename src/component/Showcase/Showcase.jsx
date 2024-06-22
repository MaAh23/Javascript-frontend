import React from 'react'
import './Showcase.css'
import img_backgroundlines from '../../assets/images/Rectangle 607.svg'
import img_showcase from '../../assets/images/Showcase-images.svg'
import Button from '../Generics/Button'

const Showcase = () => {
  return (
    <section className="showcase">
      <img className='background-lines' src={img_backgroundlines} />
        <div className="container">
            <div  className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <Button text="Get Consulting"/>
                <Button text="Learn More"/>
            </div>
            <img src={img_showcase} alt="en man som har en surfplata på handen"/>
        </div>
    </section>
  )
}

export default Showcase