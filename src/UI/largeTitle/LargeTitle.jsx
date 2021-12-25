import React from 'react'

import './largeTitle.css'

function LargeTitle(props) {
    return (
        <div className='large__title-container'>
            <div className="large__title-container_suptitle">
                { props.item.suptitle }
            </div>
            <div className="large__title-container_title">
                { props.item.title }
            </div>
        </div>
    )
}

export default LargeTitle
