import React, { useState } from 'react'
import { collection, query, where,getDocs } from "firebase/firestore";
import {db} from '../firebase';

const Search = () => {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch=async ()=>{

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("displayName", "==", username)); //creating a query to search for

    try {

      const querySnapshot = await getDocs(q);  //searching for the query

      if(querySnapshot.empty){  //if querySnapshot is empty it means that user is not found
        setUser(null);
        setError(true);
      }
      else{
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        }); 
        setError(false);
      }
      
    } catch (error) {
      setUser(null);
      setError(true);
    }

  }

  const handleKeyDown=(e)=>{
    e.code==="Enter" && handleSearch(); //when Enter key is pressed then search for the user
  }

  return (
    <div className='search'>

        <input className='search-input' type="text" placeholder='Find a user' onChange={e=>{setUsername(e.target.value)}} onKeyDown={handleKeyDown} />

        {error && <span>User not found</span>}

        {user && <div className="chat-info">

            <div className='chat-image'>
                <img src={user.photoURL} alt="chat_image" />
            </div>

            <div className='chat-details'>
                <span>{user.displayName}</span>
                {/* <p>How are you?</p> */}
            </div>
        </div>}
    </div>

    
  )
}

export default Search