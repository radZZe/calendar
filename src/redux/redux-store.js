import {combineReducers, createStore} from 'redux'
import categoryReducer from './category-reducer.js'

let reducers = combineReducers({
    categoryReducer:categoryReducer,
})

let store = createStore(reducers);

export default store;
