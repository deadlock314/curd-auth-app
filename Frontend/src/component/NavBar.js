import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  
    return ( 

        <nav>
            <Link to='/'> Home </Link>

            <ul>
                <li>
                    <Link to='/data' > Show Data </Link>
                </li>
                <li>
                    <Link to='/addData' > Add Data </Link>
                </li>
                
            </ul> 

        </nav>
 
 

     );
}

export default NavBar;