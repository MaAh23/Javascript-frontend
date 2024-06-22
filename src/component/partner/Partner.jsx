import React from 'react'
import './Partner.css'
import img_partner1 from '../../assets/images/paperz.svg'
import img_partner2 from '../../assets/images/dorfus.svg'
import img_partner3 from '../../assets/images/martino.svg'
import img_partner4 from '../../assets/images/square.svg'
import img_partner5 from '../../assets/images/gabona.svg'


const Partner = () => {
  return (
    <section className="partner">
            <div className="container">
                <img className="img1" src={img_partner1} alt="" />
                <img src={img_partner2} alt=""/>
                <img src={img_partner3} alt=""/>
                <img src={img_partner4} alt=""/>
                <img src={img_partner5} alt=""/>
            </div>
    </section>
    
  )
}

export default Partner