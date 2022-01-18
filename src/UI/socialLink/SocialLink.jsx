import React from 'react'

import { RiInstagramFill } from 'react-icons/ri'

function SocialLink(props) {
    return (
        <a href={ props.link } target={'_blank'}>
            <RiInstagramFill />
        </a>
    )
}

export default SocialLink
