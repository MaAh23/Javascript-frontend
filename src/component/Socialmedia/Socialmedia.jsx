import React from 'react'
import './Socialmedia.css'

const Socialmedia = () => {
  return (
    <section className="sociala-footer">
        <div className="container">
            <div className="title">
                <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            </div>
            <div className="sociala-medier">
                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Socialmedia