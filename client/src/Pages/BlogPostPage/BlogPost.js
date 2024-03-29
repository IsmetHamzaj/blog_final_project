import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { hideLoading, showLoading } from '../../Redux/loadingSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import LayOut from '../../Components/LayOut';
import "./BlogPostPage.css"

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

    function GetComments() {
        return (
            <div className="comments-container">
                {
                    comments.map((com) => {
                        return (
                            <div key={com._id} className="comment">
                                <p className="comment-content">{com.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    function DisplayComments() {
        const blogComments = comments.filter(comment => comment.blogId === id);
        console.log(blogComments)
        // console.log(blogComments)
        if (blogComments.length > 0) {
            return (
                <div className='comments-content'><GetComments comments={blogComments} /></div>)
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
            <div className='comment-form-container'>
                <form onSubmit={onSubmit}>
                    <input type='text' name='content' className='comment-input' placeholder='Comment...' />
                    <input type='hidden' name='blogId' className='comment-input' placeholder='Blog ID...' value={id} />
                    <button type='submit' className="comment-submit-button">Post Comment</button>
                </form>
            </div>
        )
    }

    return (
        <div className='blog-post-container"'>
            {Object.keys(blogPost).length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div key={blogPost._id}>
                    <p className='blog-post-description'>{blogPost.description}</p>
                    <p className='blog-post-title'>{blogPost.title}</p>
                    <p className='blog-post-tags'>{blogPost.tags}</p>
                </div>
            )}
            <div className='comments-container'>
                <DisplayComments blogId={blogPost._id} />
            </div>
            <div className='comment-form'>
                <CreateComment />
            </div>
        </div>
    );


};

export default LayOut(BlogPost);
