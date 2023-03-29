import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { alertsSlice } from './loadingSlice'
import blogReducer from './blogSlice'

const rootReducer = combineReducers({
    loading: alertsSlice,
    blog: blogReducer
})


const store = configureStore({
    reducer: rootReducer
})


export default store