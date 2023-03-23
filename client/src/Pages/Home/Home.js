import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading, hideLoading } from '../../Redux/loadingSlice'

const Home = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blog.blogs)
  const loading = useSelector((state) => state.loading)
  const [currentPage, setCurrentPage] = useState(1)
  const [BlogsPerPage, setBlogsPerPage] = useState(12)

  console.log(BlogsPerPage)
  console.log(currentPage)
  useEffect(() => {
    dispatch(showLoading())
    const response = axios.get("http://localhost:3000/api/blogs")
      .then(() => dispatch(hideLoading()))
      .catch((err) => {
        console.log(err)
        dispatch(hideLoading())
      })
  }, [])

  return (
    <div>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          blogs.map((blog) => {
            return (
              <div key={blog._id}>
                <p>{blog.title}</p>
                <p>{blog.description}</p>
                <p>#{blog.tags}</p>
              </div>
            )
          })
        )
      }
      <p>{currentPage}</p>
    </div>
  )
}

export default Home