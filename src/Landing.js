import React from "react";
import './Landing.css'
import LandingForm from './assets/landing-form.png'
const Landing = () => {


    return (


        <>
            {/* //NAVBAR */}

            <nav className="navbar">
                <div className="nav-title">Omega</div>
                <div>
                    <span className="nav-menu">Demos</span>
                    <span className="nav-menu">Pages</span>
                    <span className="nav-menu">Support</span>
                </div>
                <div>
                    <button className="nav-btn">Get Beta Access</button>
                </div>
            </nav>


            {/* MAIN */}
            <main>
                <section className="section-one">
                    <div></div>
                    <div>
                    <img src={LandingForm} />
                    </div>
                </section>

            </main>
        </>

    )
}
export default Landing