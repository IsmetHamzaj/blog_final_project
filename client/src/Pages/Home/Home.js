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
  const [BlogsPerPage, setBlogsPerPage] = useState(25)
  useEffect(() => {
    const com = [
      {
        id: 1,
        description: "hiiidasdasdddddddddddddddddddddddddddddddd"
      },
      {
        id: 2,
        description: "hiiiidsaaaaaaaaaaaaaaaaaaaaa"
      },
      {
        id: 3,
        description: "hiiidasdasdasdasdasdasdasi"
      }
    ]
    const data = setComments(com)
  }, [])


  const [comments, setComments] = useState([])
  const [com, setCom] = useState(false)
  console.log(comments)

  function GetComments() {


    return (
      <div>
        {
          comments?.map((f) => {
            return (
              <div key={f.id}>
                <p>{f.description}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

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
    <div>
      <div className="container">
        <div className='grids'>
          {loading ? <p>Loading...</p> : (
            <div className="blogs-grid">
              {blogs && currentBlogs?.map((blog) => (
                <div>
                  <Link to={`/blogs/${blog._id}`} className="link-div">
                    <div key={blog._id} className='blog-item'>
                      <h2 className="blog-title">{blog.title}</h2>
                      <p className="blog-description">{blog.description}</p>
                      <div className="blog-tags">#{blog.tags}</div>
                    </div>
                  </Link>
                  <button onClick={() => setCom(!com)}>See Comments</button>
                  {
                    com ? (
                      <GetComments />
                    ) : (
                      null
                    )
                  }
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="pagination">
        <Pagination BlogsPerPage={BlogsPerPage} totalBlogs={blogs?.length} paginate={paginate} currentPage={currentPage} />
      </div>
    </div>
  );
}
export default LayOut(Home)