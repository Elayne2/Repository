const reducer = (state, action ) =>{
    console.log('reducer state', state)

    switch(action.type){
        case 'SELECTED_ROBOT' :
            return {...state, selectedRobots : action.payload }

        case 'ROBOTS_LOADED' :
            return {...state, robots :action.payload}
        
        case 'ROBOTS_ERROR' :
            return action.payload
            
        default :
            return state.robots;
    }
}

export default reducer;