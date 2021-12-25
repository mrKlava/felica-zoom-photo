import React from 'react'

function Link(props) {
    return (
        <a href={ props.item.link } >
            { props.item.text }
        </a>
    )
}

export default Link
