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
                    <Link to={`/profile/}`}>Profile</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;