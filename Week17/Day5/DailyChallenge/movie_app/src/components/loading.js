import React from 'react'
import SearchForm from './SearchForm'
import MoviesContainer from './Moviescont'
import '../Style.css'
function Landing(){

    return(
        <div className='landing'>
            <SearchForm/>
            <MoviesContainer/> 
        </div>
    )
}

export default Landing;