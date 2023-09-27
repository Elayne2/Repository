const reducer = (state, action) =>{
    
    switch(action.type){
        case 'UPDATE_CITY_NAME': 

            return {
                ...state,
                cityName : action.playload
            } 

        case 'UPDATE_TEMPERATEUR': 

            return {
                ...state,
                temperateur : action.playload
            }
        
        case 'NEXT_FIVE_DAYS': 

            return {
                ...state,
                nextFiveDays : action.playload
            } 
        case 'FORCAST_WEATHER_FAILED' : 
            return {
                ...state,
                error : action.playload
            }

        case 'IS_ADDED' : 
            let temp = [...state.favories]

            let ifExist = temp.filter((e) => e.name === action.playload.name )
            console.log()
            if(ifExist.length <= 0){
                temp.push(action.playload)
                alert('item is added')
            }
            return {
                ...state,
                favories :  temp
            }
        default :
            return state
    }
}

export {reducer}