import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {

    return (
    <div>
        <nav className="navbar">
            <p className="nav navbar-nav">
                <label className='nav'>
                    <Link to="/home">Home</Link>
                </label>
                <label className='nav'>
                    <Link to="/signup">Signup</Link>
                </label>
                <label className='nav'>
                    <Link to="/login">Login</Link>
                </label>
                <label className='nav'>
                    <Link to='/candyform'>Candy Form</Link>
                </label>
                <label className='nav'>
                    <Link to='/reviews'>Reviews</Link>
                </label>
                <label className='nav'>
                    <Link to="/reviewform">Review Form</Link>
                </label>
            </p>
        </nav>
    </div>
    );
};


export default NavBar