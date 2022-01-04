import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NavBar from './component/NavBar';
import AddData from './component/dataComponent/addData';
import Data from './component/dataComponent/Data';
import logIn from './component/authComponent/logIn';
import SignUp from './component/authComponent/signUp';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    <Routes>
  <Route path='/data' element={<Data/>}/>
  <Route path='addData'  element={<AddData/>}/>
  <Route path='/login' element={<logIn/>} />
  <Route path='/signup' element={<SignUp/>} />
  </Routes>

   </BrowserRouter>
 
  );
}

export default App;
