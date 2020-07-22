import React, {useState} from 'react'

const Form = (props) => {

    const [formValue, setFormValues] =useState(
        {
            naem: '',
            email: '',
            password: '',
        })

    const onChange = (e) => {
        console.log(e.target.name, e.target.value)
        setFormValues({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }
    return(
        <form classname = 'form-container' onSubmit = {event => {
            event.preventDefault()
            props.newUser(formValue)
            setFormValues({
                name: '',
                email: '',
                password: '',
            })
        }}>
            <h2>Sign-Up</h2>
            <div className = 'form-inputs'>
                <label htmlFor='nameInput'>Name:&nbsp;
                <input 
                    id='nameInput'
                    type='text'
                    placeholder='Type Name Here'
                    maxLength='30'
                    name='name'
                    value = {formValue.name}
                    onChange = {onChange}
                    />
                </label>
                <br />

                <label htmlFor='emailInput'>Email:&nbsp;
                <input 
                    id='emailInput'
                    type='email'
                    placeholder='Type Email Here'
                    maxLength='30'
                    name='email'
                    value = {formValue.email}
                    onChange = {onChange}
                    />
                </label>
                <br />

                <label htmlFor='passwordInput'>Password:&nbsp;
                <input 
                    id='passwordInput'
                    type='text'
                    placeholder='Type Name Here'
                    maxLength='30'
                    name='name'
                    value = {formValue.password}
                    onChange = {onChange}
                    />
                </label>
                <br />
            </div>

            <div className = 'form-submit'>
                <button>Submit</button>
            </div>
        </form>
    )


}


export default Form;