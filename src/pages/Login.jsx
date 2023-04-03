import React from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate,NavLink } from "react-router-dom";


const Login = () => {

  const [error, setError] = React.useState(false)
    const navigate = useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const email=e.target[0].value;
        const password=e.target[1].value;

        try {
            
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/");

        } catch (error) {
            console.log(error);
            setError(true);
        }
    }



  return (
    <div className='container main'>


        <form onSubmit={handleSubmit}>

        <h1>Log In</h1>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
    </div>


    <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password"/>
    </div>


    <button type="submit" className="btn btn-primary">Log In</button>
        </form>

        <p><NavLink to="/register">Don't have an account? Sign up here</NavLink></p>

        {error && <p>Something went wrong</p>}

    </div>

  )
}

export default Login