import './App.css';
import Login from './Components/Login/Login';
import Home from './Pages/Home';
import { Navigate, useNavigate } from 'react-router'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

const ProtectedRoute = ({ user, ...props }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Route {...props} />;
};


function App({ user }) {

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
