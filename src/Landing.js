import React from "react";
import './Landing.css'

import Oval from './assets/sec1-oval.svg'

import FeatureSection from "./components/FeatureSection";
import SectionFour from "./components/SectionFour";
import SectionFifth from "./components/SectionFifth";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

const Landing = () => {


    return (


        <>
            <Navbar />
            <main>
                <SectionOne />
                <img className="oval-svg" src={Oval} alt='Oval-svg' />
                <SectionTwo />
                <FeatureSection />
                <div className="line"></div>
                <SectionFour />
                <SectionFifth />
                <Footer />

            </main>
        </>

    )
}
export default Landing