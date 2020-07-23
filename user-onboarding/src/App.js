import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form'
import NewUser from './NewUser'

import axios from 'axios'
import * as yup from 'yup'

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


  const onChange = (newUser) => {
    setUsers([...user, newUser])
  }

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


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Welcome!</h1> */}
      <Form newUser = {onChange} />
    </div>
  );
}
