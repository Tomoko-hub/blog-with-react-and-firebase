import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHouse, 
  faFilePen,
  faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
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
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightFromBracket} /> 
            Login
        </Link>
    </nav>
  )
}

export default NavBar
