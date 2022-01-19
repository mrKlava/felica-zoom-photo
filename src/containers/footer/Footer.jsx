import React from 'react'

import { Title, Email, SocialLink } from '../../UI'

import './footer.scss'

function Footer(props) {

    return (
        <div className='contacts' id='contacts'>
            <div className="container">
                <div className="contacts-content">
                    <div className="contacts-content_img">
                        <img src={ props.data.image } alt="" />
                    </div>
                    <div className="contacts-content_info">
                        <Title item={ props.data }/>
                        <div className="contacts-content_info-text">
                            { props.data.text }
                        </div>
                        <Email email={ props.data.email} />
                        <div className="contacts-content_info-social">
                            <SocialLink link={props.data.instagram} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
