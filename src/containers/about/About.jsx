import React from 'react'

import aboutImg from '../../assets/images/about/about.jpg'
import { Title } from '../../UI'

import './about.css'

function About() {
    return (
        <div className='about' id='about'>       
            <div className="about-container">
                <div className="about-container_item">
                    <div className="about-container_item-img">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
                <div className="about-container_item">
                    <div className="about-container_item-content">
                        <Title/>
                        <div className="about-container_item-content-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, assumenda ea illum nesciunt doloribus eaque? Quod sunt, ut dolores vel deleniti maiores molestiae! Reiciendis voluptatem assumenda sed beatae labore vitae soluta temporibus ex minus. Repellat atque eaque quaerat cupiditate saepe, animi iure provident fugit, praesentium nesciunt voluptate voluptas! Optio necessitatibus, asperiores nulla praesentium exercitationem consequuntur qui quaerat dolore voluptates sed consectetur. Ipsum accusantium, illum expedita totam enim labore numquam, mollitia beatae veniam libero tempore ducimus, accusamus eum harum possimus nisi dolorem odit minus quasi. Corrupti doloribus nostrum obcaecati totam recusandae distinctio reiciendis possimus rerum.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
