import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/api/blogs")
        .then(res => {
          setBlogs(res.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

  return (
    <div>
        {
            blogs.map((blog) => {
                return(
                    <div key={blog._id}>
                        <p>{blog.title}</p>
                        <p>{blog.description}</p>
                        <p>#{blog.tags}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home