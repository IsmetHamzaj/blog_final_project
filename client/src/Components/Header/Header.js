import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Navbar = (props) => {
    const { match } = props
    return (
        <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>Categories:</li>
        <li>
          <ul>
            <li>
              <Link to="/category/sports">Sports</Link>
            </li>
            <li>
              <Link to="/category/politics">Politics</Link>
            </li>
            <li>
              <Link to="/category/education">Education</Link>
            </li>
            <li>
              <Link to="/category/technology">Technology</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    );
};

export default Navbar;