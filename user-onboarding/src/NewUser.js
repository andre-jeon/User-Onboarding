import React from 'react';

const NewUser = (props) => {
    const {details} = props

    if (!details) {
        return <h3>Working fetching new user&apos;s details...</h3>
    }

    return(
        <div className = 'user-container'>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>
                {details.terms.includes("terms") ? <p>User has NOT agreed to the terms of service!</p> : <p>User has agreed to the terms of service.</p>}
            </p>
        </div>
    )
}
export default NewUser;