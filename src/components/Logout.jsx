import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logoutButton = () =>{
    signOut(auth).then(()=> {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <p>
        Logout
      </p>
      <button onClick={logoutButton}>
        Logout
      </button>
    </div>
  )
}

export default Logout
