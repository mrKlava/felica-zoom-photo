import React from 'react'

import { LargeTitle } from '../../UI'

import "./header.css"

function Header(props) {
    return (
        <div className='header' id='header'>
            <div className="container">
                <div className="header-content">
                    <LargeTitle item ={ props.data } />
                    <div className="header-content_text">
                        { props.data.text }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
