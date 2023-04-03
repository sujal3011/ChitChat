import React from 'react'
import image_icon from '../assets/image_icon.png'
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth,storage,db} from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate,NavLink } from "react-router-dom";

const Register = () => {

    const [error, setError] = React.useState(false)
    const navigate = useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();

        const displayName=e.target[0].value;
        const email=e.target[1].value;
        const password=e.target[2].value;
        const file=e.target[4].files[0];

        try {
            
            const response=await createUserWithEmailAndPassword(auth, email, password);


            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);


            uploadTask.on( 
            (error) => {
                console.log(error);
                setError(true);
            }, 
            () => {
               
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateProfile(response.user,{
                        displayName: displayName,
                        photoURL: downloadURL
                    })

                    await setDoc(doc(db, "users", response.user.uid), {
                        uid:response.user.uid,
                        displayName: displayName,
                        email: email,
                        photoURL: downloadURL
                    });

                    await setDoc(doc(db, "userChats", response.user.uid), {});
                    navigate("/");
                });

            }
            );

        } catch (error) {
            console.log(error);
            setError(true);
        }
    }


  return (


    <div className='container main'>
        <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

    <div className="mb-3">
        <label htmlFor="name" className="form-label">Display Name</label>
        <input type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
    </div>


    <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
    </div>


    <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password"/>
    </div>

    <div className="mb-3">
        <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="confirm_password"/>
    </div>

    <div className="mb-3">
        <input style={{display:"none"}} type="file" className="form-control" id="file"/>
        <label htmlFor="file" className="form-label">
            <img src={image_icon} alt="display image" className="display-image"/>
            <span>Select a display image</span>
        </label>
    </div>

    <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>

        <p><NavLink to="/login">Already have an account? Login here</NavLink></p>

        {error && <p>Something went wrong</p>}

    </div>

  )
}

export default Register