import axios from 'axios';
import React ,{useState} from 'react';

 function LogIn() {
    
        const [user ,setUser] = useState({email:'' ,password:''});

        const changeHandler =(e)=>{
            setUser(...user ,{[e.target.value]:e.target.value});
    
        };
    
        const clickHandler =(e)=>{
            e.preventDefault();
            axios.post('http://localhost:5000/auth/login',user).then(setUser ({email:'' ,password:''}))
            
        }
    
        return ( 
            <from>
                <label htmlFor="email" >Email : <input type="email" id='email' value={user.email} onChange={changeHandler}/>  </label>
                <label htmlFor="password" > Password : <input type='text' id='password' value={user.password}  onChange={changeHandler}/> </label>
                <button type='submit' onClick={clickHandler}>logIn</button>
            </from>
       
        );  
 }
 
 export default LogIn;