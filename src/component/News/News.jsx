import React from 'react'
import './News.css'
import img_news1 from '../../assets/images/pic1.svg'
import img_news2 from '../../assets/images/pic2.svg'
import img_news3 from '../../assets/images/pic3.svg'

const News = () => {
  return (
    <section className="article-page1">
        <div className="container">
            <div className="section-tittle">
                <div>
                    <p>Article & News</p>
                    <h2>Get Every Single Articles & News</h2>
                </div>
                <div>
                    <a className="btn-yellow" href="login.html">Browse Articles <i className="fa-solid fa-right-to-bracket"></i></a>
                </div>
            </div>
            <div className="main-artikel">
                <article>
                    <img src={img_news1} alt="" />
                    <p>Business</p>
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
                <article>
                    <img src={img_news2} alt="" />
                    <p>Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
                <article>
                    <img src={img_news3} alt="" />
                    <p>Business</p>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </article>
            </div>
            <div className="under-sida">
                <button className="cirkle-1"></button>
                <button className="cirkle"></button>
                <button className="cirkle"></button>
                <button className="cirkle"></button>
                <button className="cirkle"></button>
            </div>
        </div>
    </section>
  )
}

export default News