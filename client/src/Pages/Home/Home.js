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
  const loading = useSelector((state) => state.alerts)
  const [currentPage, setCurrentPage] = useState(1)
  const [BlogsPerPage, setBlogsPerPage] = useState(10)
  const [comments, setComments] = useState([])
  const [blogComments, setBlogComments] = useState({})


  //Calls for blog and comments
  useEffect(() => {
    axios.get("http://localhost:3000/api/comments", {}, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    })
      .then((response) => {
        const comment = response.data.data
        console.log(comment)
        setComments(comment)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

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


  // console.log(com)

  //Handle comments functions
  function GetComments({ comments }) {
    return (
      <div>
        {
          comments?.map((f) => {
            return (
              <div key={f._id}>
                <p>{f.content}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  function DisplayComments({ blogId }) {
    const blogComments = comments.filter(comment => comment?.blogId === blogId);
    // console.log(blogComments)
    if (blogComments.length > 0) {
      return (<GetComments comments={blogComments} />)
    } else {
      return null
    }
  }

  function CreateComment() {
    const [content, setContent] = useState("")
    const [blogId, setBlogId] = useState("")
    const onSubmit = async (e) => {
      e.preventDefault()
      try {
        dispatch(showLoading())
        const commentContent = await e.target.content.value
        const commentBlogId = await e.target.blogId.value
        const response = await axios.post("http://localhost:3000/api/comments", {
          content: commentContent,
          blogId: commentBlogId
        })
      } catch (error) {
        
      }
    }
    return (
      <div>
        <form>
          <input type='text' name='content' placeholder='Comment...' />
          <input type='text' name='blogId' placeholder='Blog ID...' />
        </form>
      </div>
    )
  }




  
  //Pagination
  const indexOfLastBlog = currentPage * BlogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - BlogsPerPage;
  const currentBlogs = blogs ? blogs.slice(indexOfFirstBlog, indexOfLastBlog) : []

  const paginate = pageNumber => setCurrentPage(pageNumber)


  //The interface

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
                  <CreateComment />
                  <button onClick={() => setBlogComments(prevState => ({ ...prevState, [blog._id]: !prevState[blog._id] }))}>
                    {blogComments[blog._id] ? 'Hide Comments' : 'See Comments'}
                  </button>
                  {
                    blogComments[blog._id] ? (
                      <DisplayComments blogId={blog._id} />
                    ) : null
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