import React from 'react'

//The Redux magic starts here. Access them anywhere directly without importting and stuff
import {useSelector, useDispatch} from 'react-redux'
import {toggleListItem, addItem, clearItems} from './actions'



function App() {
	const dispatch = useDispatch()
	const itemList = useSelector(state => state.itemList)
	let inputRef = React.createRef()


	//Bruh.. very simple form handling. But don't overuse REF.
	function handleClick() {
		dispatch(addItem(inputRef.current.value))
		inputRef.current.value = ""

	}

	let renderedItemList = itemList.map( (obj,ind) => <li onClick = {() => dispatch(toggleListItem(ind))}> {!obj.isDone ? obj.text : <s>{obj.text}</s>} </li>)

	return(
	<div className = 'container'>
		<div className = 'row'>
			<div className = 'column'>
					<h1> // TODO </h1>
					<ul>
						{renderedItemList}
							 	

					</ul>
			</div>
		</div>
		<div className = 'row'>
			<div className = 'column'>
				<input type='text' ref = {inputRef}/>
			</div>
			<div className = 'column'>
				<button className = 'button button-clear' onClick = {handleClick}>ADD </button>
				
				<button className = 'button button-clear' onClick = {() => dispatch(clearItems())}>CLEAR </button>
				
			</div>
				 
		</div> 


	</div>
	)
}





export default App	