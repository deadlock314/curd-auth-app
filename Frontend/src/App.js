import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NavBar from './NavBar';
import AddData from './component/dataComponent/addData';
import Data from './component/dataComponent/Data';
import LogIn from './component/authComponent/logIn';
import SignUp from './component/authComponent/signUp';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    <Routes>
  <Route path='/data' element={<Data/>}/>
  <Route path='addData'  element={<AddData/>}/>
  <Route path='/login' element={<LogIn/>} />
  <Route path='/signup' element={<SignUp/>} />
  </Routes>

   </BrowserRouter>
 
  );
}

export default App;
