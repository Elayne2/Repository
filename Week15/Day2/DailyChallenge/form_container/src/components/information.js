import React, { useEffect, useState } from 'react'
import '../style.css'

function Informations(props){
    const [info, setInfo] = useState({
        first_name : '',
        last_name : '',
        age : '',
        gender : '',
        destination : '',
        nuts : 'No',
        lactose : 'No',
        vegan : 'No'
    })


    useEffect(()=>{
        let {information} = props
        setInfo(information)
    },[props])

    return(
        <div className='info'>
            <h1>Entered information:</h1>
            <div className='top'>
                
                <p>Your name: {info.first_name} {info.last_name}</p>             
                <p>Your age: {info.age} </p>             
                <p>Your gender: {info.gender} </p>                
                <p>Your destination: {info.destination}</p>               
                <p>Your dietary restrictions: </p>
                
            </div>
            <div>

                <p>--Nuts free : {info.nuts} </p>  
                <p>--Lactose free : {info.lactose} </p>   
                <p>--Vegan meal : {info.vegan} </p> 
                
            </div>
        </div>
        
    )
}

export default Informations;