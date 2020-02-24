import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import accountReducer from './accountReducer'


export default combineReducers({
    cartReducer,
    accountReducer,
})