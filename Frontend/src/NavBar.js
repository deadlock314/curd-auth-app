import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navBarStyles.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


function NavBar() {
   
    return ( 
        <div>
        <nav>
            <input type='checkbox' id='box'></input>
            <label htmlFor='box' className='box-btn'>
                <i className='fa fa-bars'></i>
            </label>
            <ul>
                <li >
                     <Link  to='/'> Home </Link>
                </li>
                <li>
                    <Link  to='/data' > Show Data </Link>
                </li>
                <li>
                    <Link  to='/addData' > Add Data </Link>
                </li>
                 <li>
                    <Link   to='/login' > Log-in </Link>
                </li>
                <li>
                    <Link   to='/logout' > Log-out </Link>
                </li>
                <li>
                    <Link  to='/signup' > Sign-up </Link>
                </li>
            </ul> 

        </nav>
    </div>
 

     );
}

export default NavBar;