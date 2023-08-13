import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        
        <div className="body">
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container ">
                <div className="hero-left">
                    <div className="hero-title">
                        <p className='title'>We’ve got your morning covered with</p>
                    </div>
                    <br />
                    <div className="hero-coffe">Coffee</div>
                    <div >
                        <span className="title">It is best to start your day with a cup of coffee. Discover the<br />
                            best flavours coffee you will ever have. We provide the best<br />
                            for our customers.
                        </span>
                    </div>
                    <br />
                    <div>
                        <a href="/card"><button className='btn btn-warning'>Order now</button></a>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </section>
        </div>
    )
}

export default Hero
