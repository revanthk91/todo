import React from 'react'


//The Redux magic starts here. Access them anywhere directly without importting and stuff
import {useSelector, useDispatch} from 'react-redux'
import {increaseGub, decreaseGub} from './actions'



function App() {
	const gubCount = useSelector(state => state.gubCount)
	const dispatch = useDispatch()

	return(
		<div>
		<h1>Gub Dumping</h1>
		<label>Gubs Count: {gubCount}</label>
		<button onClick = { () => dispatch(increaseGub())}>Gubb </button>
		<button onClick = { () => dispatch(decreaseGub())}>De-Gubb </button>
		</div> 
		)
}

//Condiction HTML trick
//{ isLogged ? <someHtml/> : <otherHtml> }


export default App	