import React from 'react'
import './Lastpage.css'
const Lastpage = () => {
    return (
        <div className='paddings innerWidth flexCenter'>
            <div className='bodyl'></div>
            <div >
                <p className="last-title">Subscribe to get the Latest News</p>
            </div>
            <div className="last-con">
                <p className="last-text">Don’t miss out on our latest news, updates, tips and special offers</p>
            </div>
            <div >
                <input className="last-input" type="text" placeholder='Enter your email' />

            </div>
            <div>
                <button className='last-btn'>Subscribe</button>
            </div>
        </div>

    )
}

export default Lastpage
