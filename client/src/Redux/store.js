import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux"
import { loadingSlice } from './loadingSlice'
import blogSlice from './blogSlice'

const rootReducer = combineReducers({
    loadings: loadingSlice.reducer,
    blog: blogSlice.reducer
})


const store = configureStore({
    reducer: rootReducer
})

export default store