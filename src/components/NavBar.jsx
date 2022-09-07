import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">Post</Link>
        <Link to="/login">Login</Link>
    </nav>
  )
}

export default NavBar
