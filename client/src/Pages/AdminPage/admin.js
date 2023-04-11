import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./admin.css"

const Admin = () => {
    const [adminUsers, setAdminUsers] = useState([])
    const [adminBlogs, setAdminBlogs] = useState([])
    const [adminComments, setAdminComments] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/api/comments")
            .then((res) => {
                setAdminComments(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios.get("http://localhost:3000/api/blogs")
            .then((res) => {
                setAdminBlogs(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        axios.get("http://localhost:3000/api/admin/all-users")
            .then((res) => {
                setAdminUsers(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    function AllUsers() {
        return (
            <div >
                <h3 className='title'>User Names:</h3>
                <div className='admin-container'>
                    {
                        adminUsers.map((users) => {
                            return (
                                <div className='name_containers'>
                                    <p className='names'>Name: {users.name}</p>
                                    <p>Email: {users.email}</p>
                                    <p>Password: {users.password}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }


    function AllBlogs() {
        return (
            <div>
                <h3 className='title'>User Blogs:</h3>
                <div className='admin-container'>
                    {
                        adminBlogs.map((blogs) => {
                            return (
                                <div className='name_containers'>
                                    <p>ID-s: {blogs._id}</p>
                                    <p>Title: {blogs.title}</p>
                                    <p>Description: {blogs.description}</p>
                                    <p>Date: {blogs.date}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }


    function AllComments() {
        return(
            <div>
                <h3 className='title'>User Comments:</h3>
                <div className='admin-container'>
                    {
                        adminComments.map((comments) => {
                            return(
                                <div className='name_containers'>
                                    <p>Blog Id: {comments.blogId}</p>
                                    <p>Content: {comments.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }


    return (
        <div>
            <AllUsers />
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <AllBlogs />
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <AllComments />
        </div>
    )
}

export default Admin