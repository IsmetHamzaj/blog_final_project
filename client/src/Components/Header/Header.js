import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const { match } = props
    const { id } = match.params
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to={`/profile/${id}`}>Profile</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;