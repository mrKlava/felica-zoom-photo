import React from 'react'

import { LargeTitle } from '../../UI'
import { Service } from '../../components'

import './services.css'

function Services() {
    return (
        <div className='services' id='services'>
            <div className="container">
                <div className="services-content">
                    <LargeTitle/>
                    <div className="services-content_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio excepturi molestiae et ab sit ipsam in quidem quos!
                    </div>
                    <div className="services-content_cards">
                        <Service/>
                        <Service/>
                        <Service/>
                        <Service/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
