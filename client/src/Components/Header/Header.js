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
          <Link to="/profile/:id">Profile</Link>
        </li>
        <li>Categories:</li>
        <li>
          <select>
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
          </select>
        </li>
      </ul>
    </nav>
    );
};

export default Navbar;