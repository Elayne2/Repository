import { createStore, applyMiddleware } from "redux";
import {reducer} from '../reducers/Reducers'
import thunk from 'redux-thunk'

const initialState = {
    movies: [],
    loading: false,
    movie: []
}


export const store = createStore(reducer, initialState, applyMiddleware(thunk))