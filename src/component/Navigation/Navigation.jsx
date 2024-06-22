import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import './Navigation.css'
import img_logotype from '../../assets/images/Logotype.svg'
import Button from '../Generics/Button'

const Navigation = () => {
  return (
    <section className="nav"> 
        <div className="container">
            <Link to="/"> <img className="logotype" src={img_logotype} alt="#"/></Link>
            <div className="meny">
                <div className='top-menu'>
                    <div className="contact-info">
                        <div className="info-box">
                            <i className="fa-solid fa-phone"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="info-box">
                            <i className="fa-solid fa-envelope"></i>
                            info@crito.com
                        </div>
                        <div className="info-box last">
                            <i className="fa-solid fa-location-dot"></i>
                            Sveavägen 31, 111 34  stockholm
                        </div>
                    </div>
                    <div className="sociala-medier">
                        <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="under-menu">
                    <nav>
                        <NavLink  to="/">Home</NavLink>
                        <NavLink  to="/Service">Service</NavLink>
                        <NavLink  to="/News">News</NavLink>
                        <NavLink  to="/Contacts">Contact</NavLink>
                    </nav>
                    <Button text="Login" url="/login"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navigation