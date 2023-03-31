import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { showLoading, hideLoading } from '../../Redux/loadingSlice'
import blogSlice, { addBlog } from '../../Redux/blogSlice'
import { Link, useParams } from 'react-router-dom'
import LayOut from '../../Components/LayOut'
import './Home.css'
import Pagination from '../../Components/Pagination'

const Home = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blog.blog[0])
  const { id } = useParams()
  const loading = useSelector((state) => state.alerts)
  const [currentPage, setCurrentPage] = useState(1)
  const [BlogsPerPage, setBlogsPerPage] = useState(10)


  useEffect(() => {
    dispatch(showLoading());
    axios.get("http://localhost:3000/api/blogs", {}, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    })
      .then((response) => {
        const blogs = response.data.data;
        dispatch(addBlog(blogs));
        dispatch(hideLoading());
      })
      .catch((error) => {
        dispatch(hideLoading());
        console.error(error);
      });
  }, []);

  const indexOfLastBlog = currentPage * BlogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - BlogsPerPage;
  const currentBlogs = blogs ? blogs.slice(indexOfFirstBlog, indexOfLastBlog) : []

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="container">
      {loading ? <p>Loading...</p> : (
        <div className="blogs-grid">
          {blogs && blogs?.map((blog) => (
            <Link to={`/blogs/${blog._id}`}>
              <div key={blog._id} className='blog-item'>
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-description">{blog.description}</p>
                <div className="blog-tags">#{blog.tags}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="pagination">
        <Pagination BlogsPerPage={BlogsPerPage} totalBlogs={blogs?.length} paginate={paginate} currentPage={currentPage} />
      </div>
    </div>
  );
}
export default LayOut(Home)