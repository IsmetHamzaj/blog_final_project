import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import LayOut from '../LayOut'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const userEmail = await e.target.email.value
      const userPassword = await e.target.password.value
      const response = await axios.post("http://localhost:3000/api/users", {
        email: userEmail,
        password: userPassword
      })
      console.log(response.data.data)
      if (response.data.data) {
        navigate('/')
      } else {
        alert("Your email or password is wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div class="login-container">
        <div class="login-form">
          <form onSubmit={onSubmit}>
            <input type="email" placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='password' name='password' onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LayOut(Login)