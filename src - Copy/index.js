import React from 'react'
import ReactDOM from 'react-dom'
import App from './mine/App.js'
import './index.css'
import './milligram.css' //okay

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducer from './mine/reducer'

const myStore = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render( <Provider store = {myStore}><App/></Provider>,document.getElementById('root'))