import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { hideLoading, showLoading } from '../../Redux/loadingSlice';
import { useDispatch } from 'react-redux';

const BlogPost = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const [blogPost, setBlogPost] = useState(null);
    

    useEffect(() => {
        dispatch(showLoading())
        axios.get(`http://localhost:3000/api/blogs/${id}`)
            .then((response) => {
                setBlogPost(response.data.data);
                dispatch(hideLoading());
            })
            .catch((error) => {
                console.error(error);
                setLoading(hideLoading());
            });
    }, [id]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h1>{blogPost.title}</h1>
                    <p>{blogPost.description}</p>
                    <p>{blogPost.content}</p>
                </div>
            )}
        </div>
    );
};

export default BlogPost;
