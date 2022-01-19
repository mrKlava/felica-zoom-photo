import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import { Link, LangBar } from '../../UI'

import './navbar.scss'

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
                        <LangBar data={props.data.lang} />
                    </div>
                    <div className="navbar-links_menu">
                        {
                            toggleMenu 
                            ? <RiCloseLine onClick={ () => setToggleMenu(false) } />
                            : <RiMenu3Line onClick={ () => setToggleMenu(true) } />
                        }
                        {
                            <div className={ 
                                        !toggleMenu 
                                        ? "navbar-links_menu_container" 
                                        :"navbar-links_menu_container active" } 
                                    onClick={ () =>setToggleMenu(false) }>
                                {
                                    obj.map(function(link) {
                                        return <Link item={ link } key={ link.id } />
                                    })
                                }
                                <LangBar data={props.data.lang} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
