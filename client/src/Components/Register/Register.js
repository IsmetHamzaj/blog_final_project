import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { hideLoading, showLoading } from '../../Redux/loadingSlice'
import axios from 'axios'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.post('/api/users/register')
      dispatch(hideLoading())
      if (response.data.data) {
        toast.success(response.data.message)
        navigate('/login')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      dispatch(hideLoading())
      toast.error("Something went wrong")
    }
  }
  return (
    <div>
      <form onSubmit={onFinish}>
        <button type='submit'>here</button>
      </form>
    </div>
  )
}

export default Register