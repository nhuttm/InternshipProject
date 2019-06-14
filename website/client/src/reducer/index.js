import { combineReducers } from 'redux'
import categoriesReducer from './categoryReducer'
import clothesReducer from './clothesReducer'
import userReducer from './userReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    clothesReducer,
    categoriesReducer,
    userReducer,
    cartReducer
});