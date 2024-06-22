import React from 'react'
import './Members.css'
import img_member1 from '../../assets/images/team1.svg'
import img_member2 from '../../assets/images/team2.svg'
import img_member3 from '../../assets/images/team3.svg'
import img_member4 from '../../assets/images/team4.svg'

const Members = () => {
  return (
    <section className="team-section">
        <div className="container">
            <div className="section-tittle">
                <div>
                    <p>Meet our team</p>
                    <h2>Experience team members</h2>
                </div>
                <div className="btn">
                    <a className="btn-yellow" href="login.html">Browse Teams</a>
                </div>
            </div>

            <div className="team-members">
                <div>
                    <img src={img_member1} alt="" />
                    <h3>kristine palmer</h3>
                    <p>chef operation officer</p>
                </div>
                <div>
                    <img src={img_member2} alt=""/>
                    <h3>kristine palmer</h3>
                    <p>chef operation officer</p>
                </div>
                <div>
                    <img src={img_member3} alt=""/>
                    <h3>kristine palmer</h3>
                    <p>chef operation officer</p>
                </div>
                <div>
                    <img src={img_member4} alt=""/>
                    <h3>kristine palmer</h3>
                    <p>chef operation officer</p>
                </div>
            </div>
            
            <div className="under-sida">
                <button className="cirkle"></button>
                <button className="cirkle-1"></button>
                <button className="cirkle"></button>
                <button className="cirkle"></button>
                <button className="cirkle"></button>
            </div>
        </div>
    </section>
  )
}

export default Members