import React, { useState } from 'react';
import axios from 'axios';
function AddData() {

const [person, setPerson] = useState(
	{name: '',
	age: 0,
    salary : 0
});

const clickHandler = e => {
	e.preventDefault();
	 axios.post('http://localhost:5000/routes/post',person)
     setPerson({name: '',
	age: 0,
    salary : 0})
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
	</label>
	<br />
    <label>
		Salary:
		<input
		value={person.salary}
		name="salary"
		type="number"
		onChange={changeHandler}
		/>
	</label>
	<button>Submit</button>
	</form>

</div>
);
}

export default AddData;