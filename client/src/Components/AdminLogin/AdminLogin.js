import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { hideLoading, showLoading } from '../../Redux/loadingSlice'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const AdminLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            dispatch(showLoading())
            const adminEmail = await e.target.email.value
            const adminPassowrd = await e.target.password.value
            const response = await axios.post("http://localhost:3000/api/users", {
                email: adminEmail,
                password: adminPassowrd
            })
            console.log(response.data.data.isAdmin)
            dispatch(hideLoading())
            if(response.data.data.isAdmin) {
                localStorage.setItem("isAdmin", response.data.data.isAdmin)
                toast.success(response.data.message)
                toast("Redirecting to admin panel")
                navigate("/admin")
            } else {
                dispatch(hideLoading())
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }
  return (
    <div>
        <h1>Warning: This login page is only for admin</h1>
        <form onSubmit={onSubmit}>
            <input type='email' placeholder='Email' name="email" onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Log In</button>
        </form>
    </div>
  )
}

export default AdminLogin