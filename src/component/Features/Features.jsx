import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <section className="feature">
            <div className="container">
                <div className="section-tittle">
                    <p>Features</p>
                    <h2>Our Accounting is trusted by thousand of companies</h2>
                    <a className="btn-yellow" href="#">Learn More <i className="fa-solid fa-right-to-bracket"></i></a>
                </div>
                <div className="wrapper">
                    <div>
                        <i className="fa-regular fa-handshake fa-fade"></i>
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <i className="fa-regular fa-lightbulb fa-fade"></i>
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-arrow-up-right-dots fa-fade"></i>
                        <h3>Financial Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-box-open - fa-fade"></i>
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>

  )
}

export default Features