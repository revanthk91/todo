import gubCounter from './gubCounter'
import {combineReducers} from 'redux'


//Define the STORE/STATE/DB structure here.
const allReducer = combineReducers({
	gubCount : gubCounter
})


export default allReducer