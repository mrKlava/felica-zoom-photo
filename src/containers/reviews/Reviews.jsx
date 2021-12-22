import React from 'react'


import { Review } from '../../components'
import './reviews.css'

function Reviews() {
    return (
        <div className='reviews' id='reviews'>
            <div className="container">
                <Review/>
            </div>
        </div>
    )
}

export default Reviews
