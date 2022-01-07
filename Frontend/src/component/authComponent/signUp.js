import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const redirect = useNavigate();
    const [user ,setUser] = useState({name:'',email:'' ,password:''});

    function changeHandler(e) {
        const { name, value } = e.target
        setUser((user) =>({
            ...user,  [name]: value 
        }));

    };

    const clickHandler =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/signup',user).then((res)=>{
        if(res.data.isUserSignedUp){
            alert('user succesfully signed up');
             
           
            setUser ({name:'',email:'' ,password:''})
            redirect("/LogIn");
        }  
        else{

          alert('something went wrong try again');
            
        }
        
    })}

    return ( 
        <form>
            <label htmlFor="name" >Name : <input type='text' name='name' id='name' value={user.name} onChange={changeHandler} /></label><br />
            <label htmlFor="email" >Email : <input type="email" name='email' id='email' value={user.email} onChange={changeHandler}/>  </label><br />
            <label htmlFor="password" > Password : <input type='text' name='password' id='password' value={user.password}  onChange={changeHandler}/> </label><br />
            <button type='submit' onClick={clickHandler}>signUp</button>
        </form>
   
    );
}

export default SignUp;