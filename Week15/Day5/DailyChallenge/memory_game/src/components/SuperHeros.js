import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Heros from '../heros.json'
import '../Style.css'
class HerosGame extends React.Component{
    constructor(){
        super()
        this.state = {
            heros : Heros.superheroes,
            clickedHeros : [],
            score : 0,
            topScore : 0
        }
    }

    handelClick =(clickedHero)=>{
        this.setState((state)=>{
            const tempScore = (state.clickedHeros.includes(clickedHero))? 0 : Number(state.score) +1

            const tempClikedHeros = (state.clickedHeros.includes(clickedHero))? [] : [...state.clickedHeros, clickedHero ]
           
            return{
                heros : [...state.heros].sort((a, b)=> (Math.random() > .5) ? -1 : 1),
                clickedHeros : tempClikedHeros,
                score : tempScore,
                topScore : Math.max(tempScore, state.topScore)
            }
            
        })

        console.log(this.state)
    }

    render(){ 

        return(
            <div className='section'>
                <div className='header'>
                    <h1 className="navbar-brand" >Superheroes Memory Game</h1>
                    <nav className="navbar navbar-expand-lg  ">
                            <p>Score: <span> {this.state.score} </span> </p>
                            <p>Top Score: <span> {this.state.topScore} </span> </p>
                    </nav>
                </div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <p> Get points by clicking on an image but don't click on any more than once!</p>
                    </div>
                </div>
                {this.state.heros.map((hero)=>(
                    <div className="card" key={hero.id} onClick={()=> this.handelClick(hero.name)} >
                        <div className="card-img" >
                            <img src={hero.image}  alt="img introuvable" />
                        </div>
                        <div className="body">
                            <ul>
                                <li> 
                                    <strong>Name:</strong>
                                    {hero.name}
                                </li>
                                <li> 
                                    <strong>Occupation:</strong> 
                                    {hero.occupation}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            
        )
    }
}


export default HerosGame;