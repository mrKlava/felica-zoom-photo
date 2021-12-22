import React from 'react'

import reviewImg from '../../assets/images/reviews/pexels-bruno-salvadori-2245383.jpg'

import './review.css'

function Review() {
    return (
        <div className='review'>
            <div className="review-content">
                <div className="review-content_img">
                    <img src={reviewImg} alt="" />
                </div>
                <div className="review-content_info">
                    <div className="review-content_info-text">
                        “Lorem ipsum, dolor sit amet  adipisicing elit. Non libero voluptas sequi sunt recusandae dolore, debitis praesentium quis, officiis fugit quasi ipsum officia  earum!”
                    </div>
                    <div className="review-content_info-name">
                        Clara
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Review