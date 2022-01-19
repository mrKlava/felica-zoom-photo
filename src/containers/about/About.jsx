import React from 'react'

import { Title } from '../../UI'

import './about.scss'

function About(props) {
    return (
        <div className='about' id='about'>       
            <div className="about-container">
                <div className="about-container_item">
                    <div className="about-container_item-img">
                        <img src={props.data.image} alt="" />
                    </div>
                </div>
                <div className="about-container_item">
                    <div className="about-container_item-content">
                        <Title item={ props.data } />
                        <div className="about-container_item-content-text">
                           { props.data.text }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
