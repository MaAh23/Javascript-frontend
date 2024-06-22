import React from 'react'
import './Update.css'
import img_backgroundline from '../../assets/images/Element.svg'

const Update = () => {
  return (
    <section className="nyheter">
        <img className="lines-right" src={img_backgroundline} alt=""/>
        <div className="container">
            <h2>Get News Updates By Signup </h2>
            <form>
                <input type="text" placeholder="username@domain.com"/>
                <button className="btn-yellow">Subscribe <i className="fa-solid fa-arrow-up-right-dots fa-fade"></i></button>
            </form>
        </div>
    </section>
  )
}

export default Update