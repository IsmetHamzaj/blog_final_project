import {combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {Provider} from "react-redux"
import { loadingSlice } from './loadingSlice'

const rootReducer = combineReducers({
    loadings: loadingSlice.reducer
})


const store = configureStore({
    reducer: rootReducer
})

export default store