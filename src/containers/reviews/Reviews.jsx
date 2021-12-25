import React from 'react'

import { Review } from '../../components'

import './reviews.css'

function Reviews( props ) {

    let obj = props.data.review;

    return (
        <div className='reviews' id='reviews'>
            <div className="container">
                {
                    obj.map(function(review) {
                        return <Review item={review} key={review.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Reviews
