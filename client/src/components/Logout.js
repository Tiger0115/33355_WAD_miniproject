import React,{useEffect} from 'react'
import { logout } from './Firebase';
import { useNavigate} from 'react-router-dom';
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const Logout = () => {
    const navigate = useNavigate();
  
  const handleChange = () => {
        logout();
        alert("user logged out successfully");
        navigate('/login',{replace: true});
  }
  return (
    <div>
      <button onClick={handleChange}>Logout</button>
    </div>
  )
}

export default Logout
