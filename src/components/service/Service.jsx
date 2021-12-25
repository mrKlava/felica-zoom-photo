import React from 'react'

import './service.css'

function Service(props) {
    return (
        <div className='service'>
                <div className="service-content">
                    <div className="service-content_img">
                        <div className="service-content_img-div">
                            <img src={ props.item.image } alt="" />
                        </div>
                        <div className="service-content_img-title">
                            { props.item.title }
                        </div>
                    </div>
                    <div className="service-content_info">
                            <div className="service-content_info-text short">
                                { props.item.text.short }
                            </div>
                            <div className="service-content_info-more active">
                                MORE
                            </div>
                            <div className="service-content_info-text long active">
                                { props.item.text.long }
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default Service
