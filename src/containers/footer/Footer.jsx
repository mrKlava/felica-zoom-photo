import React from 'react'

import { Title } from '../../UI'
import contactImg from '../../assets/images/pexels-wilson-vitorino-2191611.jpg'

import './footer.css'

function Footer() {
    return (
        <div className='contacts' id='contacts'>
            <div className="container">
                <div className="contacts-content">
                    <div className="contacts-content_img">
                        <img src={contactImg} alt="" />
                    </div>
                    <div className="contacts-content_info">
                        <Title/>
                        <div className="contacts-content_info-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatibus molestiae voluptas neque eaque repudiandae dolorum, fuga tenetur vitae rerum corrupti provident aperiam maiores quae! Omnis repudiandae nostrum voluptate at.
                        </div>
                        <div className="contacts-content_info-email">
                            felicaphotography@photos.com
                        </div>
                        <div className="contacts-content_info-social">
                            INSTAGRAM LOGO
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
