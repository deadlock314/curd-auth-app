import React, { Component, useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';

function Data() {
    
    
    const [persons,setPerson]=useState([{_id:1,name:'x',imgUrl:'x',DOB:'x',city:'x',country:'x'}])
   
    useEffect(()=>{
        axios.get('http://localhost:5000/routes',{withCredentials: true
        }).then(response=>{
            setPerson(response.data);
          
           }).catch((err)=>{
               console.log(err)
           }
              
           )
    },[])
       

    const clickDeleteHandler=(e)=>{
        
        axios.delete('http://localhost:5000/routes/delete/'+[e.target.name]).then((res)=>{
            if(res.data.isUserDeleted)
              setPerson(persons.filter((key)=>key!==[e.target.name]))
            else
               alert('user not deleted something went wrong')
        }
            
        ).catch(
            alert('user not deleted something went wrong')
        )
    }

     
    return ( 
        <div>
        {
            persons.map((person)=>{
                return(
                   
                 <div style={{marginLeft:'50pperson',padding:"5pperson"}} key={person._id} >

                 <img src={person.imgUrl} alt={person.name}/>
                  <h3>Name :{person.name}</h3>
                <p>Date-of-Birth :{person.DOB}</p>
                  <p>City :{person.city}</p>
                   <p>Country :{person.country}</p> 

                  <button style={{margin:'20px',padding:"5px"}} name={person._id} onClick={clickDeleteHandler}>Delete</button>
                  
               </div>
                 )
        })}
         </div>
     )};

export default Data;