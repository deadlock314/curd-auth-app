import axios from 'axios';
import React ,{useState} from 'react';

 function LogIn() {
    
        let [user ,setUser] = useState({email:'' ,password:''});
     
        const changeHandler =e=>{
            const {name , value}=e.target;
            setUser((user) =>({
                ...user,  [name]: value 
            }));
    
        };
    
        const clickHandler =(e)=>{
            e.preventDefault();
            axios.post('http://localhost:5000/login',user).then((res)=>{
                if(res.data.isUserLoggedIn){
                    alert('user succesfully Logged-In') 
                     setUser ({email:'' ,password:''})
                }
                else{
                    alert('something went wrong try again');
                }
            })
            
        }
    
        return (
          
            <form>
                <label htmlFor="email" >Email : <input type="email" name="email" id='email' value={user.email} onChange={changeHandler}/>  </label><br/>
                <label htmlFor="password" > Password : <input type='text' name="password" id='password' value={user.password}  onChange={changeHandler}/> </label><br />
                <button type='submit' onClick={clickHandler}>logIn</button>
            </form>
           
        );  
 }
 
 export default LogIn;