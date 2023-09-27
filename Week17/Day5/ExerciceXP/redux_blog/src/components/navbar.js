import React from 'react'
import { Link} from "react-router-dom";

import '../style.css'



function Navbar(){

    return(
        <div className='header'>
            <div className='navbar'>
                <div className='logo'> <Link className='Link_logo' to= '/'> My Blog </Link></div>
                <ul>
                    <li>
                        <Link className='Link' to= '/'> Home </Link>
                    </li>
                    <li>
                        <Link className='Link' to='/about' > About </Link> 
                    </li>
                    <li>
                        <Link className='Link' to='/contact' > Contact </Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar;