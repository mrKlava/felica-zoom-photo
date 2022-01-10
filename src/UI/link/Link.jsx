import React, { useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Link(props) {
    
    const [offset, setOffset] = useState('')
    
    useEffect( () => {
        updateDimensions()
        window.addEventListener("resize", updateDimensions)
        return () => window.removeEventListener("resize", updateDimensions)
    })
    
    const updateDimensions = () => {
        const width = window.innerWidth
        checkWidth(width)
    };
    
    function checkWidth(width) {
        if ( width <= 768) {
            setOffset(props.item.offset.mob)

        } else {
            setOffset(props.item.offset.desk)
        }
    }

    return (
        <AnchorLink  offset={ offset } href={ props.item.link } >    
            { props.item.text }
        </AnchorLink>
    )
}

export default Link
