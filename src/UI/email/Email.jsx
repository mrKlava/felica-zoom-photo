import React from 'react'

function Email(props) {

    let email = props.email;

    let copyEmail = () => {
        navigator.clipboard.writeText(email)
    }

    return (
        <div className="contacts-content_info-email">
            <p className='email' onClick={ copyEmail }>
                { email }
                <span className="email-copy">Click to Copy</span>
            </p>
            
        </div>
    )
}

export default Email
