import { CHANGE_SEARCH_FIELD,
REQUEST_ROBOTS_PEDNING,
REQUEST_ROBOTS_SUCCESS,
REQUEST_ROBOTS_FAILED,
CHANGE_STYLE
 } from './constants';


export const setSearchField = (text) => {
	console.log('setSearchField');
	return {
	type: CHANGE_SEARCH_FIELD, //constant, in Javascript convention, is captalized. 
	payload: text  //payload is we're sending whatever data is needed to the reducer
}}//redux would catch an Object, and send it to reducer

export const setRequestRobots = () => (dispatch)=>{
	console.log('setRequestRobots');
	dispatch({type: REQUEST_ROBOTS_PEDNING})
	fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json() )
      .then(users=> dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users}))
      .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}))
} // redux-thunk middleware would catch that function and give it dispatch
// otherwise, redux couldn't catch it.


export const setStyleChange = (text) => {
	return {
	type: CHANGE_STYLE, //constant, in Javascript convention, is captalized. 
	payload: text  //payload is we're sending whatever data is needed to the reducer
}}