import React from 'react'
import './Project.css'
import img_project1 from '../../assets/images/project1.svg'
import img_project2 from '../../assets/images/project2.svg'
import img_project3 from '../../assets/images/project3.svg'
import img_project4 from '../../assets/images/project4.svg'

const Project = () => {
  return (
   
    <section className="project-section">
            <div className="container">
                <div className="section-tittle">
                    <p>Project & Case Studies</p>
                    <h2>Let's Looks Our Global Projects</h2>
                </div>
                <div className="project-case">
                    <article>
                        <img src={img_project1} alt="" />
                        <h3>Grow your business</h3>
                        <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
                    </article>
                    <article>
                        <img src={img_project2} alt="" />
                        <h3>Why your client needs a responsive website</h3>
                        <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
                    </article>
                    <article>
                        <img src={img_project3} alt=""/>
                        <h3>Educate your employees to get better results</h3>
                        <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
                    </article>
                    <article>
                        <img src={img_project4} alt=""/>
                        <h3>Business Insights is a important piece of your business</h3>
                        <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
                    </article>
                </div>
                <div className="center-content">
                    <a  className="btn-black" href="project.html">All Rexnet Project</a>
                </div>
            </div>
        </section>
  )
}

export default Project