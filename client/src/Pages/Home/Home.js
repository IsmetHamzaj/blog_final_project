import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading, hideLoading } from '../../Redux/loadingSlice'
import blogSlice, { addBlog } from '../../Redux/blogSlice'
import { Link, useParams } from 'react-router-dom'
import LayOut from '../../Components/LayOut'

const Home = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blog.blog[0])
  const { id } = useParams()
  console.log(blogs)
  const loading = useSelector((state) => state.loading.loading)
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

  useEffect(() => {
    console.log('loading:', loading);
  }, [loading]);

  return (
    <div className="container">
      {loading ? <p>Loading...</p> : (
        <div className="blogs-grid">
          {blogs?.map((blog) => (
            <div key={blog._id} className="blog-item">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-tags">#{blog.tags}</div>
            </div>
          ))}
        </div>
      )}
      <div className="pagination">
        <button onClick={() => currentPage - 1}>prev</button>
        <p className="current-page">{currentPage}</p>
        <button onClick={() => currentPage + 1}>next</button>
      </div>
    </div>
  );
}
export default LayOut(Home)