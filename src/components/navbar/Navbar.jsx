import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import { Link } from '../../UI'

import './navbar.css'

function Navbar(props) {
    const obj = props.data.links

    const [toggleMenu, setToggleMenu] = useState(false)

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
                                return <Link item={ link } key={ link.id } />
                            })
                        }
                        <div className="navbar-links_container-langbar">
                            EN
                        </div>
                    </div>
                    <div className="navbar-links_menu">
                        {
                            toggleMenu 
                            ? <RiCloseLine onClick={ () => setToggleMenu(false) } />
                            : <RiMenu3Line onClick={ () => setToggleMenu(true) } />
                        }
                        {
                            toggleMenu && (
                                <div className="navbar-links_menu_container">

                                    {
                                        obj.map(function(link) {
                                            return <Link item={ link } key={ link.id } />
                                        })
                                    }

                                    <div className="navbar-links_menu_container-langbar">
                                        EN
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {
                console.log( window.innerWidth )
            }
        </div>
    )
}

export default Navbar
