import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import LayOut from '../LayOut'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../Redux/loadingSlice'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(showLoading())
      const userEmail = await e.target.email.value
      const userPassword = await e.target.password.value
      const response = await axios.post("http://localhost:3000/api/users", {
        email: email,
        password: password
      })
      console.log(response)
      dispatch(hideLoading())
      if (response.data.data) {
        toast.success(response.data.success)
        toast("Redirecting to homepage")
        localStorage.setItem("token", response.data.token)
        console.log(response.data.token)
        navigate('/')
      } else {
        dispatch(hideLoading())
        alert("Passowrd is incorrect")
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error("Something went wrong")
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
          <Link to='/register'>Go to register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login