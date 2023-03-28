import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../../Redux/loadingSlice'

const Profile = () => {
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const params = useParams()

    const getUserData = async (id) => {
        try {
            dispatch(showLoading())
            const response = await axios.post(`/api/users/${id}`, { id: params._id })
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
        <div className="profile-container">
            <div className="profile-header">
                <h1>My Profile</h1>
            </div>
            <div className="profile-body">
                <div className="profile-info">
                    <h2>John Doe</h2>
                    <p>Email: john.doe@example.com</p>
                    <p>Location: New York, NY</p>
                    <p>Interests: React, JavaScript, Music</p>
                </div>
            </div>
        </div>
    );
}

export default Profile