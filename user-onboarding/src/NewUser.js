import React from 'react';

const NewUser = (props) => {
    const {details} = props

    if (!details) {
        return <h3>Working fetching new user&apos;s details...</h3>
    }

    return(
        <div className = 'user-container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>password: {details.password}</p>
        </div>
    )
}
export default NewUser; 