import listReducer from './listReducer'
import {combineReducers} from 'redux'


//Define the STORE/STATE/DB structure here.
const allReducer = combineReducers({
	itemList : listReducer
})


export default allReducer