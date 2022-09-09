import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHouse, 
  faFilePen,
  faArrowRightFromBracket,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'


const NavBar = ({ isAuth }) => {
  return (
    <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
            Home
          </Link>
        <Link to="/createpost">
          <FontAwesomeIcon icon={faFilePen} /> 
            Post
          </Link>
        {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> 
            Login
        </Link>
        ): (
        <Link to="/logout">
          <FontAwesomeIcon icon={faArrowLeft} />
            Logout
          </Link>
        )}
    </nav>
  )
}

export default NavBar
