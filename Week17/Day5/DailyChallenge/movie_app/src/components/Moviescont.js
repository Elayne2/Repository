import React from 'react'
import MovieCard from '../components/MovieCard'
import {connect} from 'react-redux'
function MoviesContainer(props){

    return(
        <div className='moviCont'>
            <div className='container'>
            {props.loading === true? <h1>Loading...</h1> : 
            props.movies.map((item)=>(
                <MovieCard movie = {item} />
            ))}
            </div>
        </div>
    )
}
const mapStateToProps =(state)=>{
    return{
        movies : state.movies,
        loading : state.loading
    }
}

export default connect(mapStateToProps)(MoviesContainer);