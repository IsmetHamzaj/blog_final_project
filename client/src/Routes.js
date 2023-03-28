import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Components/Login/Login'
import Profile from './Pages/Profile/Profile'
import BlogPost from './Pages/BlogPostPage/BlogPost'
import BlogPostPage from './Pages/BlogPostPage/BlogPostPage'
import Register from './Components/Register/Register'



const Views = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='/blog/:id' element={<BlogPost />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}
export default Views