import { combineReducers } from 'redux'
import categoriesReducer from './categoryReducer'
import clothesReducer from './clothesReducer'
import userReducer from './userReducer'
import cartReducer from './cartReducer'
import adminReducer from './adminReducer'

export default combineReducers({
    clothesReducer,
    categoriesReducer,
    userReducer,
    cartReducer,
    adminReducer
});