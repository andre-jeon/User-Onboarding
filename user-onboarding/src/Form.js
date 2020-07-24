import React from 'react'

const Form = (props) => {

    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
      } = props
    
      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
    //   const onCheckboxChange = evt => {
    //     const { name, checked } = evt.target
    //     checkboxChange(name, checked)
    //   }
    
    //   const onInputChange = evt => {
    //     const { name, value } = evt.target
    //     inputChange(name, value)
    //   }
      
      
    return(
        <form classname = 'form-container' onSubmit = {onSubmit}>
            <h2>Sign-Up</h2>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>

            <div className = 'form-inputs'>
                <label htmlFor='nameInput'>Name:&nbsp;
                <input 
                    id='nameInput'
                    type='text'
                    placeholder='Type Name Here'
                    maxLength='30'
                    name='name'
                    value = {values.name}
                    onChange = {inputChange}
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
                    value = {values.email}
                    onChange = {inputChange}
                    />
                </label>
                <br />

                <label htmlFor='passwordInput'>Password:&nbsp;
                <input 
                    id='passwordInput'
                    type='password'
                    placeholder='Type Password Here'
                    maxLength='30'
                    name='password'
                    value = {values.password}
                    onChange = {inputChange}
                    />
                </label>
                <br />

                <label htmlFor='termsOfService'>Terms of Service
                <input 
                    id='termsOfService'
                    type='checkbox'
                    name='terms'
                    checked = {values.terms}
                    onChange = {(e) => checkboxChange(e)}
                    />
                </label>
                <br />
            </div>

            <div className = 'form-submit'>
            <button id='submitBtn' disabled = {disabled}>submit</button>
            </div>
        </form>
    )
}


export default Form;