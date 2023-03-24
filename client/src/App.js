import './App.css';
import Login from './Components/Login/Login';
import Home from './Pages/Home';
import { Navigate, Route, Routes, useNavigate } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Profile from './Pages/Profile';
import { useState } from 'react';

const ProtectedRoute = ({ user, ...props }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Route {...props} />;
};


function App({user}) {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <ProtectedRoute path="/" element={<Home />} user={user} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
