import React from 'react'

import { LargeTitle } from '../../UI'
import "./header.css"

function Header() {
    return (
        <div className='header' id='header'>
            <div className="container">
                <div className="header-content">
                    <LargeTitle/>
                    <div className="header-content_text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quae aliquid dolor quis porro corporis iste delectus, repellat laborum, minima officiis excepturi! Cupiditate officia aut quia commodi laudantium fugiat voluptate!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
