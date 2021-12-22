import React from 'react'

import serviceImg from '../../assets/images/services/wedding/pexels-dimitri-kuliuk-1488312.jpg'

import './service.css'

function Service() {
    return (
        <div className='service'>
                <div className="service-content">
                    <div className="service-content_img">
                        <div className="service-content_img-div">
                            <img src={serviceImg} alt="" />
                        </div>
                        <div className="service-content_img-title">Title</div>
                    </div>
                    <div className="service-content_info">
                            <div className="service-content_info-text short">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero voluptas sequi sunt recusandae dolore, debitis praesentium quis, officiis fugit quasi ipsum officia natus earum dignissimos a nam ab molestias.
                            </div>
                            <div className="service-content_info-more active">
                                More
                            </div>
                            <div className="service-content_info-text long active">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, doloribus nobis aliquam totam sed, id labore, quibusdam eveniet expedita tempora quas eum enim. Eaque dolor quam adipisci officia itaque autem ullam tenetur placeat laudantium ex repellendus, blanditiis ad harum esse corporis recusandae nulla fugiat nisi a ipsum praesentium eligendi velit! Expedita laborum assumenda magnam ipsum facilis sint repellat inventore harum fugiat voluptas modi magni pariatur aliquam minima vitae, repellendus voluptatem quasi doloribus? Voluptatem maxime fugit blanditiis, veniam quis dignissimos ea! Repellat totam esse ad voluptate quaerat odit laudantium provident inventore quae hic perspiciatis repellendus, reprehenderit labore, officia voluptatibus. Ab, eum.

                            </div>
                        </div>
                </div>
        </div>
    )
}

export default Service
