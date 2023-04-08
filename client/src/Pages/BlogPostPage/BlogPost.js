import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { hideLoading, showLoading } from '../../Redux/loadingSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

const BlogPost = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [blogPost, setBlogPost] = useState({});
    const [comments, setComments] = useState([])

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
        axios.get(`http://localhost:3000/api/blogs/${id}`)
            .then((response) => {
                console.log(response.data.data);
                setBlogPost(response.data.data);
                dispatch(hideLoading());
            })
            .catch((error) => {
                console.error(error);
                dispatch(hideLoading());
            });
    }, [id]);

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
        const blogComments = comments.filter(comment => comment?._id === id);
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
            try {
                dispatch(showLoading())
                const commentContent = await e.target.content.value
                const commentBlogId = await e.target.blogId.value
                const response = await axios.post("http://localhost:3000/api/comments", {
                    content: commentContent,
                    blogId: commentBlogId
                })
                dispatch(hideLoading())
                if (response.data.data) {
                    toast("Comment done")
                } else {
                    toast.error(response.data.message)
                }
            } catch (error) {
                dispatch(hideLoading())
                toast.error("Something went wrong")
            }
        }
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input type='text' name='content' placeholder='Comment...' />
                    <input type='text' name='blogId' placeholder='Blog ID...' />
                    <button type='submit'>Post Comment</button>
                </form>
            </div>
        )
    }


    console.log(id)

    return (
        <div>
            {Object.keys(blogPost).length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div key={blogPost._id}>
                    <p>{blogPost.description}</p>
                    <p>{blogPost.title}</p>
                    <p>{blogPost.tags}</p>
                </div>
            )}
            <DisplayComments />
            <CreateComment />
        </div>
    );


};

export default BlogPost;
