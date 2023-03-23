import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading, hideLoading } from '../../Redux/loadingSlice'
import blogSlice, { addBlog } from '../../Redux/blogSlice'

const Home = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blog.blog[0])
  console.log(blogs)
  const loading = useSelector((state) => state.loading)
  const [currentPage, setCurrentPage] = useState(1)
  const [BlogsPerPage, setBlogsPerPage] = useState(12)


  useEffect(() => {
    dispatch(showLoading());
    console.log("Before fetching data, loading is:", loading);
    axios.get("http://localhost:3000/api/blogs")
      .then((response) => {
        const blogs = response.data.data;
        dispatch(addBlog(blogs));
        dispatch(hideLoading());
        console.log("After fetching data, loading is:", loading);
      })
      .catch((error) => {
        dispatch(hideLoading());
        console.error(error);
      });
  }, []);

  return (
    <div>
      {
        !loading ? (
          <p>Loading...</p>
        ) : (
          blogs?.map((blog) => {
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