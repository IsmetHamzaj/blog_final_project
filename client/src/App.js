import './App.css';
import Login from './Components/Login/Login';
import Home from './Pages/Home';
import { Route, Routes, useNavigate } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Links from './Components/Links';
import Profile from './Pages/Profile';

const ProtectedRoute = ({ user, children, redirectToLogin }) => {
  if (!user) {
    redirectToLogin();
  }

  return children;
};

function App() {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/login', { replace: true });
  };
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {Links?.map((route, index) => {
            return (
              <Route
                key={index}
                path={route?.private ? "/login" : route?.path}
                element={route?.private ? <ProtectedRoute route={route} /> : route?.Component}
              />
            );
          })
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
