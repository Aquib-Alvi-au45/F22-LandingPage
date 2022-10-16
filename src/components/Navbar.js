import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
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
    )
}

export default Navbar
