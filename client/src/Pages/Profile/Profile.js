import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const [user, setUser] = useState({})
    const { id } = useParams()

    const response = axios.get(`http://localhost:3000/api/users/${id}`)
        .then(res => {
            console.log(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    return (
        <div></div>
    )
}

export default Profile