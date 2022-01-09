import axios from 'axios';

const logOutClickHandler=(e)=>{

    e.preventDefault()
    axios.get('http://localhost:5000/logout',{withCredentials: true
}).then((res)=>{
        if(res.data.isUserLoggedOut) 
          alert('succuessfully logged out');
    }
      
    ).catch(err=>alert('you are not logged in'));
}
export default logOutClickHandler;