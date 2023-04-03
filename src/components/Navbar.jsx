import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import self_image from '../assets/self_image.jpeg'
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {

  const {currentUser}=useContext(AuthContext);

  return (
    <div className='navbar'>
        <span className="logo">ChitChat</span>
        <div className="user">
            <img src={currentUser.photoURL} alt="self_image" />
        </div>
        <span>{currentUser.displayName}</span>
        <button className='logout' onClick={()=>{signOut(auth)}}>Logout</button>
    </div>
  )
}

export default Navbar