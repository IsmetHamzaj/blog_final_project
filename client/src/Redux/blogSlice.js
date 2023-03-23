import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    blog: [],
    currentBlog: {}
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addBlog: (state, action) => {
            state.blog.push(action.payload)
        },
        updateBlog: (state, action) => {
            const index = state.blog.findIndex(blog => blog._id === action.payload._id)
            if(index !== -1) {
                state.blog[index] = action.payload
            }
        },
        deleteBlog: (state, action) => {
            state.blogs = state.blog.filter(blog => blog._id !== action.payload)
        },
        setCurrentBlog: (state, action) => {
            state.currentBlog = action.payload
        }
    }
})

export const {addBlog , updateBlog, deleteBlog, setCurrentBlog} = blogSlice.actions
export default blogSlice.reducer