import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function ProtectedRoutes(props) {
  if (localStorage.getItem('token')) {
    return (
      <div>
        {props.children}
      </div>
    )
  } else {
    return <Navigate to="/login" />
  }

}

export default ProtectedRoutes