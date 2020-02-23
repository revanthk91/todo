export const toggleListItem = (id) => {
	return {
		type: "TOGGLE",
		id: id
	}

}

export const addItem = (text) => {
	return {
		type: "ADD",
		text: text
	}
}

export const clearItems = () => {
	return {
		type: "CLEAR"
	}
}