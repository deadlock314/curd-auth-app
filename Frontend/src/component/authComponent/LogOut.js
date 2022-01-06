import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function LogOut() {
const redirect=useNavigate();

const clickHandler=(e)=>{
    e.preventDefault()
    axios.get('http://localhost:5000/logout').then((res)=>{
        if(isUserLoggedOut) {
          alert('succuessfully logged out');
          redirect('/')

        } 
    }
      
    )
}


    return ( 
        <>
        <button onClick={ClickHandler}>LogOut</button>
        </>
     );
}

export default LogOut;