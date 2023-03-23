import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './loadingSlice'
import blogReducer from './blogSlice'

const rootReducer = combineReducers({
    loading: loadingReducer,
    blog: blogReducer
})


const store = configureStore({
    reducer: rootReducer
})


export default store