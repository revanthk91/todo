//create ACTUAL FUNCTIONS, with FuncitonalNaming
//goddamn with immuatabilty bull

import produce from 'immer'


const items = [
{text: "Add a thing to do", isDone: false},
{text: "Click on it when done", isDone: true},
{text: "Use clear to start a new list", isDone: false}
]

const listReducer = (state = items, action) => {
	switch(action.type) {
		case "TOGGLE":
			const newState = produce(state, draftState => {
			    draftState[action.id].isDone = !draftState[action.id].isDone
			})

			console.log(newState)
			return newState;

		case "ADD":
			console.log("ADD REQUESTED")
			if (action.text !== '') {
				const newState2 = produce(state, draftState => {
					draftState.push({text: action.text,isDone:false})
				})
				return newState2
			}


		case "CLEAR":
			return []

		default:
			return state;
	}
}


export default listReducer