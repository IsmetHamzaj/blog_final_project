import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Components/Login/Login'
import Profile from './Pages/Profile'
import BlogPost from './Pages/BlogPostPage/BlogPost'
import BlogPostPage from './Pages/BlogPostPage/BlogPostPage'
import Register from './Components/Register/Register'
import ProtectedRoutes from './ProtectedRoutes'
import Admin from './Pages/AdminPage'
import AdminLogin from './Components/AdminLogin'
import AdminProtectedRoute from './Components/AdminProtectedRoute'



const Views = () => {
    return (
        <Routes>
            <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile/:id' element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
            <Route path='/blog/:id' element={<ProtectedRoutes><BlogPost /></ProtectedRoutes>} />
            <Route path='/register' element={<Register />} />
            <Route path='/admin' element={<AdminProtectedRoute><Admin /></AdminProtectedRoute>} />
            <Route path='/login/admin' element={<AdminLogin />} />
        </Routes>
    )
}
export default Views