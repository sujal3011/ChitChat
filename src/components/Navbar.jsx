import { signOut } from 'firebase/auth';
import React from 'react';
import self_image from '../assets/self_image.jpeg'
import { auth } from '../firebase';


const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">ChitChat</span>
        <div className="user">
            <img src={self_image} alt="self_image" />
        </div>
        <span>Sujal</span>
        <button className='logout' onClick={()=>{signOut(auth)}}>Logout</button>
    </div>
  )
}

export default Navbar