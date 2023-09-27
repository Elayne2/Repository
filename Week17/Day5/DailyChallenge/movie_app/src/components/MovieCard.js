import React from 'react'
import {Link} from 'react-router-dom'
import '../Style.css'

function MovieCard({movie}){

    return(
        <div className="card" >
            <img src= {movie.Poster} className="card-img-top" alt="title"/>
            <div className="card-body">
                <h5 className="card-title"> {movie.Title} </h5>
                <Link to = {'/movie/'+ movie.imdbID} >
                    <button  className="btn btn-primary">
                        More Details ... 
                    </button>
                </Link>               
            </div>
        </div>
    )
}

export default MovieCard;