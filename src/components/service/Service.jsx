import React, {useState} from 'react'

import './service.scss'

function Service(props) {

    const [isActive, setActive] = useState('fasle')

    const handleToggle = () => {
        setActive(!isActive)
    }

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
                            <div className={ isActive ? 'service-content_info-more' : 'service-content_info-more  active' }
                            // <div className="service-content_info-more active"
                                onClick={ handleToggle }
                            >
                                MORE
                            </div>
                            <div className={ isActive ? 'service-content_info-text long' : 'service-content_info-text long  active'} >
                                { props.item.text.long }
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default Service
