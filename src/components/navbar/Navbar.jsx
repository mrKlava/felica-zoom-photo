import React from 'react'

import './navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="navbar-links">
                    <div className="navbar-links_logo">
                        <a href="#header">
                            {/* <img src="" alt="" /> */}
                            Felica Zoom
                        </a>
                    </div>
                    <div className="navbar-links_container">
                        <a href="#about">about</a>
                        <a href="#services">services</a>
                        <a href="#reviews">reviews</a>
                        <a href="#contacts">contacts</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
