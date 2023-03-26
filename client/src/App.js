import './App.css';
import Login from './Components/Login/Login';
import Home from './Pages/Home';
import { Navigate, useNavigate, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Profile from './Pages/Profile/Profile';

const ProtectedRoute = ({ user, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      element={
        user ? (
          <Component />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};


function App({ user }) {
  // const navigate = useNavigate();
  // if(!user) {
  //   navigate('/login')
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          {/* <ProtectedRoute path="/" element={<Home />} user={user} component={Home} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
