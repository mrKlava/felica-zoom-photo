import React from 'react'

import { Carousel } from 'react-responsive-carousel'

import { Review } from '../../components'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css"
import './reviews.css'

function Reviews( props ) {

    let obj = props.data.review;

    return (
        <div className='reviews' id='reviews'>
            <div className="container">
                <Carousel 
                    showThumbs={false}
                    stopOnHover={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={4000}>
                    {
                        obj.map(function(review) {
                            return <Review item={review} key={review.id} />
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Reviews
