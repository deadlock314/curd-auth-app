import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NavBar from './component/NavBar';
import AddData from './component/addData';
import Data from './component/Data';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    <Routes>
  <Route path='/data' element={<Data/>}/>
  <Route path='addData'  element={<AddData/>}/>
  </Routes>

   </BrowserRouter>
 
  );
}

export default App;
