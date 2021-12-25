import React from 'react'

import './title.css'

function Title(props) {
    return (
        <div className='title-container'>
            <div className="title-container_suptitle">
                { props.item.suptitle }
            </div>
            <div className="title-container_title">
                { props.item.title }
            </div>
        </div>
    )
}

export default Title
