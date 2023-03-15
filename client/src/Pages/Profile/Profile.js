import React, { useState } from 'react'
import axios from 'axios'

const Profile = () => {
    const [user, setUser] = useState([])
    const userId = 1

    axios.get(`http://localhost:3000/api/users/${userId}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
  return (
    <div>Profile</div>
  )
}

export default Profile