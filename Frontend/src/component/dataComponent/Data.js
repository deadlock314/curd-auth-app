import React, { Component } from 'react';
import {useEffect ,useState} from 'react';
import axios from 'axios';



function Data() {
    
    
    const [person,setPerson]=useState([{_id:1,name:"nae",age:7,salary:99},])

   

     
        useEffect(() => {
            axios.get('http://localhost:5000/routes',{withCredentials: true
        }).then(response=>{
            setPerson(response.data);
           }).catch({})
        }, []);
     
     

    return ( 

        <div>
     {   person.map((x)=>{
         return(
             <div style={{marginLeft:'50px',padding:"5px"}} key={x._id} > 
        <h1>name :{x.name}</h1>
        <h2>age :{x.age}</h2>
        <h2>salary :{x.salary}</h2> 
         {/* <button style={{margin:'10px',padding:"6px"}} onclick={UpdateHandler(x._id)}> Edit</button> */}
          <button style={{margin:'20px',padding:"5px"}} onClick={()=>{
           
           axios.delete('http://localhost:5000/routes/delete/'+x._id)
                
           axios.get('http://localhost:5000/routes').then(response=>{
                setPerson(response.data);

            })
          }
 }> Delete</button>
        </div>
         );
         
     })
       
        }
       
        </div>
 

     );
}

export default Data;