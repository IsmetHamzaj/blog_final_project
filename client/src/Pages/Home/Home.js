import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { showLoading, hideLoading } from '../../Redux/loadingSlice'
import Pagination from '../../Components/Pagination'

const Home = () => {
  const dispatch = useDispatch()
  const [blogs, setBlogs] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    dispatch(showLoading())
    axios.get("http://localhost:3000/api/blogs")
      .then(res => {
        setBlogs(res.data.data)
        setCurrentPage(res.currentPage);
        setTotalPages(res.totalPages);
      })
      .catch(err => {
        console.log(err)
      })
    dispatch(hideLoading())
  }, [])



  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

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
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}

export default Home