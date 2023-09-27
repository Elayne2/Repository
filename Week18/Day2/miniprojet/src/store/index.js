import {createStore, applyMiddleware} from 'redux'
import {reducer} from '../reducers/reducer'
import thunk from 'redux-thunk'
const initialState = {
    cityName : '',
    temperateur : '0',
    nextFiveDays : [],
    favories : [],
    error : null
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk))