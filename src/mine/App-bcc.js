import React from 'react'
import {createStore} from 'redux'

//EVERYTHING IS CODED HERE

//STORE

//ACTION : Not connected to anything. Will be called DIRECTLY with store.dispatch. Redux takes care of (Action<==>Reducer)
const increment = () => {
	return {
		type: 'INCREMENT'
	}
}
const decrement = () => {
	return {
		type: 'DECREMENT'
	}
}
//damn, only one number for now :O

//REDUCER : TAKING THE INITIAL STATE or CURRENT EXISTING STATE, and Modifying it however the F perticular we want
//Holyfucking shit. state = 0? THerE! THATS THE FUCKING INITIALIZATION
const counterInitState = {
	num : 0,
	name : 'paulNaame'
}

const counter = (state = 0,action) => {
	switch(action.type) {
		case "INCREMENT":
			return state + 1;

		case "DECREMENT":
			return state - 1;
	}
}

//create a Store. Requires a REDUCER, just a collection of (state+modifer)
let store = createStore(counter); //constructed store

//THIS IS THE OUTPUT
store.subscribe(() => console.log(store.getState()));


//DISPATCH : onEvent(() => store.dispatch(doSomething(opParams)))
store.dispatch(increment());


class App extends React.Component {



	render() {
		return(
			<div>
			<h1>Gub Dumping</h1>
			<label>Gubs Count: </label>
			<button>Dump </button>
			</div> 	
			)
	}
}

export default App	