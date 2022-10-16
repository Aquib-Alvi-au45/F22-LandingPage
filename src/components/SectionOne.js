import React from 'react'
import './SectionOne.css'
import LandingForm from '../assets/landing-form.png'




const SectionOne = () => {
    return (
        <section className="section-one">
            <div className="sec1-title">  Build your next landing page in 5 minutes!
                <p>
                    Create custom landing pages with Omega that convert more visitors than any website.
                    With lots of unique blocks, you can easily build a page without coding.</p>
            </div>
            <div className="sec1-image">
                <img src={LandingForm} alt='landingPage-form'/>
            </div>
        </section>
    )
}

export default SectionOne
