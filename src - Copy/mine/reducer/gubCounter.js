//create ACTUAL FUNCTIONS, with FuncitonalNaming

const gubCounter = (state = 3, action) => {
	switch(action.type) {
		case "INCREMENT":
			return state+1;
		case "DECREMENT":
			return state-2;
		default:
			return state;
	}
}

export default gubCounter