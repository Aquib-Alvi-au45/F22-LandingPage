import React from 'react'
import './SectionTwo.css'
import sectwoImg from '../assets/landing-sec2.png'




const SectionTwo = () => {
    return (
        <section className="section-two">
            <div className="sec2-title">
                Why Omega would be your best fit?
                <div>
                    Watch this 1 min video to learn about Omega.
                </div>
            </div>
            <div>
                <img className="sec-2-img" src={sectwoImg} alt='sec2-img' />
            </div>
        </section>
    )
}

export default SectionTwo
