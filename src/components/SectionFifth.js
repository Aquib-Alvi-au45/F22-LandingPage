import React from "react";
import './SectionFifth.css'
import PicOne from '../assets/landing-sec-5.png'
import PicTwo from '../assets/landing-sec-5th.png'



const SectionFifth = () => {
  return (
    <div className="section-five">
      <div className="sec5-title">
        Everything is easy
        <div>  Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</div>
      </div>
      <div className="img-gallery">
        <div>
          <img className="sec5-pic1" src={PicOne} alt='sec5-pic1'/>
        </div>
        <div>
        <img className="sec5-pic2" src={PicTwo} alt='sec5-pic2'/>
        </div>
      </div>

    </div>
  )
}

export default SectionFifth
