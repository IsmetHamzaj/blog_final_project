import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../../Redux/loadingSlice'
import Pagination from '../../Components/Pagination'

const Home = () => {
  const dispatch = useDispatch()
  const [blogs, setBlogs] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [BlogsPerPage, setBlogsPerPage] = useState(12)

  useEffect(() => {
    dispatch(showLoading())
    axios.get("http://localhost:3000/api/blogs")
      .then(res => {
        setBlogs(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
    dispatch(hideLoading())
  }, [])



  const indexOfLastBlog = currentPage * BlogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - BlogsPerPage
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)


  const paginate = pageNumber => setCurrentPage(pageNumber)

  
  return (
    <div>
      {
        blogs.map((blog) => {
          return (
            <div key={blog._id}>
              <p>{blog.title}</p>
              <p>{blog.description}</p>
              <p>#{blog.tags}</p>
            </div>
          )
        })
      }
      <Pagination BlogsPerPage={BlogsPerPage} totalBlogs={blogs.length} paginate={paginate} currentPage={currentPage} />
    </div>
  )
}

export default Home