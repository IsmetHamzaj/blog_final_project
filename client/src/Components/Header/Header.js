import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Header.css'

const Navbar = (props) => {
  const { id } = props

  const localStorageToken = localStorage.getItem('token')
  const isAdmin = JSON.parse(localStorage.getItem('isAdmin'))

  function LogOut(e) {
    e.preventDefault();
    if (localStorageToken) {
      localStorage.removeItem('token');
      setIsLoggedOut(true);
    } else if (isAdmin) {
      localStorage.removeItem('isAdmin');
      setIsLoggedOut(true);
    } else {
      alert("You are not logged in");
    }
  }

  const [isLoggedOut, setIsLoggedOut] = useState(false);

  if (isLoggedOut) {
    return <Navigate to='/login' />;
  }


  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={`/profile/${id}`}>Profile</Link>
        </li>
        <li>Categories:</li>
        <li>
          {/* <select>
            <option>
              <Link to="/category/sports">Sports</Link>
            </option>
            <option>
              <Link to="/category/politics">Politics</Link>
            </option>
            <option>
              <Link to="/category/education">Education</Link>
            </option>
            <option>
              <Link to="/category/technology">Technology</Link>
            </option>
          </select> */}
        </li>
      </ul>
      <ul>
        <button onClick={LogOut}>LogOut</button>
      </ul>
    </nav>
  );
};

export default Navbar;
