import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import './index.css';
import App from './containers/App';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import { searchRobots, requestRobots, styleChange } from './reducers';
import { createLogger } from 'redux-logger';
import  thunkMiddleware  from 'redux-thunk';


const rootReducer = combineReducers({searchRobots, requestRobots, styleChange}) // combine all of reducers into rootReducer
const logger = createLogger(); //log each action for debugging //or redux devtool
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); //Create object tree of Redux State (redux libary)

//pass store down all the component tree from the App, and use "connect" to finish these connection, to decide which container component would be aware of React State (reduc libary)        
ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>  
  		<App />
  	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
