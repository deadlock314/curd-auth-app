import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddData() {

const [persons,setPerson]=useState({name:'x',imgUrl:'x',DOB:'x',city:'x',country:'x'})
const redirect=useNavigate()

const clickHandler = e => {
	e.preventDefault();
	 axios.post('http://localhost:5000/routes/post',persons,{withCredentials:true}).then((res)=>{
		if(res.data.isUserAdded && res.data.isUserLoggedIn){
			alert('user added succuessfully');
			
		}
		else{
			alert('please login to add data');
			redirect('/');

		}

  setPerson({name:'x',imgUrl:'x',DOB:'x',city:'x',country:'x'})
	 }).catch((err)=>{
		 alert('please login to add data');
			redirect('/');
	 })
     
};

const changeHandler = (e) => {
	setPerson({
	...persons,
	[e.target.name]: e.target.value
	}); 
   
};

return (
	<div>
	<form onSubmit={clickHandler}>
	<label>
		Name : <input
		value={persons.name} type="text" name="name" onChange={changeHandler} />
	</label><br />
	<label>
		Date-of-Birth : <input
		value={persons.DOB} type="date" name="DOB"  onChange={changeHandler} />
	</label><br />
	<label>
		Image-Url : <input
		value={persons.imgUrl} type="text" name="imgUrl" onChange={changeHandler} />
	</label><br />
	<label>
		City : <input
		value={persons.city} type="text" name="city" onChange={changeHandler} />
	</label><br />
	<label>
		Country : <input
		value={persons.country} type="text" name="country" onChange={changeHandler} />
	</label><br />
	<br />
	<button>Submit</button>
	<button type="reset">Reset</button>
	</form>

</div>
);
}

export default AddData;