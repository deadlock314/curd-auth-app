import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddData() {

const [person, setPerson] = useState(
	{name: '',
	age: 0,
    salary : 0
});
const redirect=useNavigate()

const clickHandler = e => {
	e.preventDefault();
	 axios.post('http://localhost:5000/routes/post',person,{withCredentials:true}).then((res)=>{
		if(res.data.isUserAdded && res.data.isUserLoggedIn){
			alert('user added succuessfully');
			
		}
		else{
			alert('please login to add data');
			redirect('/');

		}

  setPerson({name: '',age: 0,salary : 0})
	 }).catch((err)=>{
		 alert('please login to add data');
			redirect('/');
	 })
     
};

const changeHandler = e => {
	setPerson({
	...person,
	[e.target.name]: e.target.value
	}); 
   
};

return (
	<div>
	<form onSubmit={clickHandler}>
	<label>
		Name:
		<input
		value={person.name}
		name="name"
		onChange={changeHandler}
		/>
	</label>
	<br />
	<label>
		Age:
		<input
		value={person.age}
		name="age"
		type="number"
		onChange={changeHandler}
		/>
	</label><br />
    <label>
		Salary:
		<input
		value={person.salary}
		name="salary"
		type="number"
		onChange={changeHandler}
		/>
	</label><br />
	<button>Submit</button>
	<button type="reset">Reset</button>
	</form>

</div>
);
}

export default AddData;