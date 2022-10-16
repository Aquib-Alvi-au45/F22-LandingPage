import React from "react";
import './SectionFour.css'
import NewFeatureImg from '../assets/landing-sec4.png'


const SectionFour = () => {


    return (
        <section className="section-four">
            <div>
                <img className="sec-four-img" src={NewFeatureImg} alt="new-feature-img" />
                <div className="circle"></div>
            </div>
            <div className="sec4-title">
                Drag and drop every elements.
                <div>  Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</div>
            </div>

        </section>
    )
}

export default SectionFour