const reducer = (state, action ) =>{
    console.log('reducer state', state)

    switch(action.type){
        case 'SELECTED_ROBOT' :
            return action.payload

        default :
            return state;
    }
}

export default reducer;