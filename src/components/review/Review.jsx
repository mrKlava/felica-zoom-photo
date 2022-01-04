import React from 'react'

import './review.css'

function Review(props) {
    return (
        <div className='review'>
            <div className="review-content">
                <div className="review-content_img">
                    <img src={ props.item.image } alt="" />
                </div>
                <div className="review-content_info">
                    <div className="review-content_info-text">
                        { props.item.text }
                    </div>
                    <div className="review-content_info-name">
                        { props.item.name }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review