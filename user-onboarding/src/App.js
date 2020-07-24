import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './Form'
import NewUser from './NewUser'

import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/formSchema';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}
const initialUsers = []
const initialDisabled = true

export default function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //   .then(res => {
  //     setUsers(res.data)
  //   })
  //   .catch(err => {
  //     debugger
  //   })
  // }

  const postNewUsers = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      debugger
    })
  }

  const inputChange = (e) => {
    e.persist()
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.type === 'checkbox'?e.target.checked : e.target.value)
      .then(valid => {
        setFormErrors({
          ...formErrors, 
          [e.target.name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, 
          [e.target.name]: err.errors[0],
        })
      })

      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
      })
  }

  const checkboxChange = (e) => {
    e.persist()

    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.type === 'checkbox'?e.target.checked : e.target.value)
      .then(valid => {
        setFormErrors({
          ...formErrors, 
          [e.target.name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, 
          [e.target.name]: err.errors[0],
        })
      })
      
    setFormValues({
      ...formValues, 
      [e.target.name]: e.target.checked
    })
  }

  console.log(formValues)

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms
    }

    postNewUsers(newUser)
  }

  // useEffect(() => {
  //   getUsers()
  // }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])


  return (
    <div className="App">

      <Form
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
        // postNewUsers={postNewUsers}
      />

      {
        users.map(user => {
          return (
            <NewUser key = {user.id} details = {user} />
          )
        })
      }

    </div>
  )
}
