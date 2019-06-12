import { combineReducers } from 'redux'
import categoriesReducer from './categoryReducer'
import clothesReducer from './clothesReducer'
import userReducer from './userReducer'

export default combineReducers({
    clothesReducer,
    categoriesReducer,
    userReducer
});