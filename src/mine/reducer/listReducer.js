//create ACTUAL FUNCTIONS, with FuncitonalNaming
//goddamn with immuatabilty bull

import produce from 'immer'


var items = [
{text: "Add a thing to do", isDone: false},
{text: "Click on it when done", isDone: true},
{text: "Use clear to start a new list", isDone: false}
]

//damn, LocalStorage? Give me a break..INIT and LOADING
if (localStorage.getItem('myData') == null) {
	localStorage.setItem('myData',JSON.stringify(items))
} else {
	items = JSON.parse(localStorage.getItem('myData'))
}


const listReducer = (state = items, action) => {
	switch(action.type) {
		case "TOGGLE":
			const newState = produce(state, draftState => {
			    draftState[action.id].isDone = !draftState[action.id].isDone
			})

			console.log(newState)
			return newState;

		case "ADD":
			if (action.text !== '') {
				const newState2 = produce(state, draftState => {
					draftState.push({text: action.text,isDone:false})
					
				})
				return newState2
			} else {
				return state;
			}


		case "CLEAR":
			return [];

		case "SAVE":
			localStorage.setItem("myData",JSON.stringify(state))
			return state;

		default:
			return state;
	}
}


export default listReducer