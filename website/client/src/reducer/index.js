import { combineReducers } from 'redux'
import categoriesReducer from './categoryReducer'
import clothesReducer from './clothesReducer'

export default combineReducers({
    clothesReducer,
    categoriesReducer
});