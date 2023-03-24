import React, { useState } from 'react'
import axios from 'axios'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const userEmail = await e.target.email.value
      const userPassword = await e.target.password.value
      const response = await axios.post("http://localhost:3000/api/users", {
        userEmail,
        userPassword
      })
      console.log(response[0])
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' name='password' onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default Login