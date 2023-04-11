import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Admin = () => {
    const [adminUsers, setAdminUsers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/")
    }, [])
  return (
    <div>admin</div>
  )
}

export default Admin