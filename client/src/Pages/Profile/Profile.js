import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../../Redux/loadingSlice'
import LayOut from '../../Components/LayOut'

const ProfileWrapper = () => {
    let { id } = useParams()
    console.log("ID value: ", id)
    return <Profile id={id} />
}

const Profile = ({ id }) => {
    const [user, setUser] = useState({})
    const dispatch = useDispatch()

    const getUserData = async () => {
        try {
            dispatch(showLoading())
            const response = await axios.get(`http://localhost:3000/api/users/${id}`, {
                headers: { Authorization: `Bearer ` + localStorage.getItem('token') }
            })
            console.log(response)
            dispatch(hideLoading())
            setUser(response.data.data)
        } catch (error) {
            console.log(error)
            dispatch(hideLoading())
        }
    }


    useEffect(() => {
        getUserData()
    }, [])

    if (!user.id) {
        return <p>Loading...</p>
    }

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>My Profile</h1>
            </div>
            <div className="profile-body">
                <div className="profile-info">
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Location: {user.location}</p>
                    <p>Interests: {user.interests}</p>
                </div>
            </div>
        </div>
    );
}

export default LayOut(ProfileWrapper)
