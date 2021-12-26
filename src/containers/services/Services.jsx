import React from 'react'

import { LargeTitle } from '../../UI'
import { Service } from '../../components'

import './services.css'

function Services(props) {

    const obj = props.data.service

    return (
        <div className='services' id='services'>
            <div className="container">
                <div className="services-content">
                    <LargeTitle item={ props.data }/>
                    <div className="services-content_text">
                        { props.data.text }
                    </div>
                    <div className="services-content_cards">

                        {
                            obj.map( function(service) {
                                // console.log(service)
                                return <Service item={service} key={service.id} />
                            })   
                        }
        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
