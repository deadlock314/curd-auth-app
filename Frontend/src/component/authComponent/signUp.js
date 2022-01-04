import axios from 'axios';
import React, { useState } from 'react';

function SignUp() {

    const [user ,setUser] = useState({name:'',email:'' ,password:''});

    const changeHandler =(e)=>{
        setUser(...user ,{[e.target.value]:e.target.value});

    };

    const clickHandler =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/auth/signup',user).then(setUser ({name:'',email:'' ,password:''}))
        
    }

    return ( 
        <from>
            <label htmlFor="name" >Name : <input type='text' id='name' value={user.name} onChange={changeHandler} /></label>
            <label htmlFor="email" >Email : <input type="email" id='email' value={user.email} onChange={changeHandler}/>  </label>
            <label htmlFor="password" > Password : <input type='text' id='password' value={user.password}  onChange={changeHandler}/> </label>
            <button type='submit' onClick={clickHandler}>signUp</button>
        </from>
   
    );
}

export default SignUp;