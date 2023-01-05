import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {

    return (
    <div>
        <nav className="navbar">
            <ul className="nav navbar-nav">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to='/candyform'>Candy Form</Link>
                </li>
                <li>
                    <Link to='/reviews'>Reviews</Link>
                </li>
                <li>
                    <Link to="/reviewform">Review Form</Link>
                </li>
            </ul>
        </nav>
    </div>
    );
};


export default NavBar