import React from 'react'
import './Box.css'

const Box = () => {
  return (
    <section className="box-contact">
            <div className="container">
                <div className="parnetBox-contact">
                    
                    <div className="box-contact">
                        <div className="box-logo1">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="box-text1">
                            <h3>Visit us </h3>
                            <p>Sveavägen 31 <br/>111 34 Stockholm</p>
                            
                        </div>
                    </div>
            
                    <div className="box-contact">
                        <div className="box-logo1">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="box-text1">
                            <h3>Call us</h3>
                            <p>+46 (8) 121 470 50 <br/>+46 (8) 121 470 51</p>
                        </div>
                    </div>
            
                    <div className="box-contact">
                        <div className="box-logo1">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="box-text1">
                            <h3>Email Us </h3>
                            <p>info@crito.com <br/>support@crito.com</p>
                        </div>
                    </div>
                </div>
        
            </div> 
        </section>

  )
}

export default Box