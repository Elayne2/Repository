const selectrobot = (robots) => {
    console.log('action state', robots)
    return{
        type : 'SELECTED_ROBOT',
        payload: robots
    }
}

const robotsLoaded = (robots) =>{
    console.log('actionrobots', robots)

    return{
        type :'ROBOTS_LOADED',
        payload : robots
    }
}

const robotError = (error) =>{
    console.log('actionrobots', error)

    return{
        type :'ROBOTS_ERROR',
        payload : error
    }
}


const robosThunk = () => (dispatch)=>{
    console.log('thunk message ' )
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log('data fetched --------------------------- ' ,data)
        dispatch(robotsLoaded(data))
    })
    .catch((error)=>{ 
        console.log('erreur message: ', error.message)
        dispatch(robotError(error.message))
    })
}

export {selectrobot, robosThunk}