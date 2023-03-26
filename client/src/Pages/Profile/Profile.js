import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/users/${id}`)
                setUser(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchUser()
    }, [id])

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