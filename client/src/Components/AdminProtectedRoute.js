import React from "react";
import { Navigate } from "react-router-dom";

function AdminProtectedRoute(props) {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
    if(isAdmin) {
        return (
            <div>
                {props.children}
            </div>
        )
    } else {
        return <Navigate to="/login/admin" />
    }
}


export default AdminProtectedRoute