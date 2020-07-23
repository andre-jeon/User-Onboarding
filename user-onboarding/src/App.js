import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form'
import NewUser from './NewUser'

import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/formSchema';

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: '',
}
const initialDisabled = true

export default function App() {

  const initialFormValues = [
    {
      name: '',
      email: '',
      password: '',
      termsOfService: false,
    }
  ]

  const [user, setUsers] = useState(initialFormValues)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data)
    })
    .catch(err => {
      debugger
    })
  }

  const postNewUsers = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...user])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      debugger
    })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors, [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, 
          [name]: err.errors[0],
        })
      })

      setFormValues({
        ...formValues,
        [name]: value
      })
  }

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues, 
      termsOfService: {
        ...formValues.termsOfService,
        [name]: isChecked,
      }
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      termsOfService: Object.keys(formValues.termsOfService)
    }

    postNewUsers(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

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
        postNewUsers={postNewUsers}
      />

      {/* {
        user.map(user => {
          return(
            <NewUser key = {user.id} details = {user} />
          )
        })
      } */}

    </div>
  );
}
