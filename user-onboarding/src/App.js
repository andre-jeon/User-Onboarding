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
  const onChange = (newUser) => {
    setUsers([...user, newUser])
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
