import React from 'react'

import { Link } from '../../UI'

import './navbar.css'

function Navbar(props) {
    const obj = props.data.links
    return (
        <div className='navbar'>
            <div className="container">
                <div className="navbar-links">
                    <div className="navbar-links_logo">
                        <a href={ props.data.link } >
                            {/* <img src="" alt="" /> */}
                            { props.data.logo }
                        </a>
                    </div>
                    <div className="navbar-links_container">

                        {
                            obj.map(function(link) {
                                return <Link item={link} key={link.id} />
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
