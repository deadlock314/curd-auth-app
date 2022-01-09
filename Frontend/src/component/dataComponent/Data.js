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
       

   
     
    return ( 
        <div>
        {
            persons.map((person)=>{
                return(
                   
                 <div style={{marginLeft:'50pperson',padding:"5pperson"}} key={person._id} id="show-data" >

                 <img src={person.imgUrl} alt={person.name}/>
                  <h3>Name : {person.name}</h3>
                <p>Date-of-Birth : {person.DOB}</p>
                  <p>City : {person.city}</p>
                   <p>Country : {person.country}</p> 

                  <button style={{margin:'20px',padding:"5px"}}  onClick={()=>{
                       console.log(persons)
                       setPerson(persons.filter((key)=>key!=person._id))
                       console.log(persons,'s')
                         axios.delete('http://localhost:5000/routes/delete/'+person._id,{withCredentials:true}).then((res)=>{
                    if(res.data.isUserDeleted){
                       const newPerson=persons.filter(pObj=>pObj._id!==person._id);
                       setPerson(newPerson);

                    }
                      
                    else
                       alert('user not deleted login to delete person')
                }
                    
                ).catch((err)=>{
                     alert('user not deleted login to delete person')
                     console.log(err)
                }
                   
                )
                  }
                
                  }>Delete</button>
                  
               </div>
                 )
        })}
         </div>
     )};

export default Data;