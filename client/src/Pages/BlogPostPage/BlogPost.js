import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { hideLoading, showLoading } from '../../Redux/loadingSlice';
import { useDispatch } from 'react-redux';

const BlogPost = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const [blogPost, setBlogPost] = useState({});
    

    useEffect(() => {
        dispatch(showLoading())
        axios.get(`http://localhost:3000/api/blogs/${id}`)
            .then((response) => {
                console.log(response.data.data);
                setBlogPost(response.data.data)
                dispatch(hideLoading());
            })
            .catch((error) => {
                console.error(error);
                dispatch(hideLoading());
            });
    }, [id]);

    return (
        <div>
           {
            blogPost.map((blog) => {
                return(
                    <div>
                        <p>{blog[0].desription}</p>
                    </div>
                )
            })
           }
        </div>
    );
};

export default BlogPost;
