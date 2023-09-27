import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Style.css'

function Footer(){


    return(
        <div>
            <p className='footer bg-dark'> Using <FontAwesomeIcon className='icon' icon="fa-brands fa-react" /> React JS & Redux JS integrated with external movies data API<span>OMDB</span>
            </p>
        </div>
    )
}

export default Footer;