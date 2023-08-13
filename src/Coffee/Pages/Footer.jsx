import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='paddings innerWidth flexCenter'>
            <div className='bodyf'></div>
            <div className="container">
                <section>
                    <div>
                        <div className="row content">
                            <div className="col-sm-4">
                                <div >
                                    <p className="head">Coffee shop</p>
                                </div>
                                <div >
                                    <p className="foo-con">Coffee shop used to purchase the coffee</p>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div >
                                    <p className="heading">About</p>
                                </div>
                                <div className='con' >
                                    <p className="foo-con">
                                        Menu<br />
                                        Features<br />
                                        News & Blogs<br />
                                        Help & Supports</p>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div >
                                    <p className="heading">Company</p>
                                </div>
                                <div className='con' >
                                    <p className="foo-con">
                                        How we work<br/>
                                        Terms of service<br/>
                                        Pricing<br/>
                                        FAQ</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                            <div >
                                    <p className="heading">Contact Us</p>
                                </div>
                                <div className='con-us' >
                                    <p className='us-f'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
                                    <p className="us-s">+1 202-918-2132</p>
                                    <p className="us-s">beanscene@mail.com</p>
                                    <p className="us-s">www.beanscene.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer
