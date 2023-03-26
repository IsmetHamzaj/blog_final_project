import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Components/Login/Login'
import Profile from './Pages/Profile/Profile'



const Routes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile/:id' element={<Profile />} />
        </Routes>
    )
}