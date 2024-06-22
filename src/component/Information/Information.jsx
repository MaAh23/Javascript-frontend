import React from 'react'
import './Information.css'
import img_logo from '../../assets/images/Logotype.svg'

const Information = () => {
  return (
    <section className="last-section">
        <div className="container">
            <div className="crito-logo">
                <img src={img_logo } alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <div className="company">
                <h3>company</h3>
                <p>About</p>
                <p>Feature</p>
                <p>Works</p>
                <p>career</p>
            </div>
            <div className="Help">
                <h3>help</h3>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className="Resources">
                <h3>resources</h3>
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
            </div>
            <div className="Link">
                <h3>link</h3>
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
            </div>
        </div>
    </section>
  )
}

export default Information