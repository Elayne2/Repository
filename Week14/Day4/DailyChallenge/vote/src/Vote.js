import React, { useState } from 'react'
import './VoteStyle.css'

function Vote(){

    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ])

    function handellClick(index){
        setLanguages(
            languages.map((item, i)=>(
                i === index ? {name: item.name , votes: item.votes+1} : item
        )) 
        )
    }

    return(
        <div className='outside'>
            <h1 className='title'>Vote Your Language!</h1>
            {languages.map((item, index)=>(
                <div className='inside'>
                    <h2 key={index}> {item.votes} </h2>
                    <h2> {item.name} </h2>
                    <h2 onClick={()=> handellClick(index)} className='btn'>Click Here</h2>
                </div>
            ))}
        </div>
    )
}

export default Vote;