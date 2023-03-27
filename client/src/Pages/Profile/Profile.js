import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../../Redux/loadingSlice'

const Profile = () => {
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const params = useParams()
    
    const getUserData = async () => {
        try {
          dispatch(showLoading())
          const response = await axios.post('/api/users/:id', { _id: params._id })
          dispatch(hideLoading())
          if (response.data.success) {
            console.log(response.data.data)
          }
        } catch (error) {
          dispatch(hideLoading())
        }
      }

      useEffect(() => {
        getUserData()
      }, [])
    if (!user._id) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <p>{user.name}</p>
        </div>
    )
}

export default Profile