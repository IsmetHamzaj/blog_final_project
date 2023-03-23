import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
    blogs: [],
    currentBlog: {}
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            state.blogs.push(action.payload)
        },
        updateBlog: (state, action) => {
            const index = state.blogs.findIndex(blog => blog._id === action.payload._id)
            if(index !== -1) {
                state.blogs[index] = action.payload
            }
        },
        deleteBlog: (state, action) => {
            state.blogs = state.blogs.filter(blog => blog._id !== action.payload)
        },
        setCurrentBlog: (state, action) {
            
        }
    }
})