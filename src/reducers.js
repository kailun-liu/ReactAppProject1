import { CHANGE_SEARCH_FIELD,
REQUEST_ROBOTS_PEDNING,
REQUEST_ROBOTS_SUCCESS,
REQUEST_ROBOTS_FAILED,
CHANGE_STYLE
 } from './constants';

const initialStateSearch = {  
      searchField:'',
} // Read-Only

export const searchRobots = (state=initialStateSearch, action={}) => {
	console.log('searchRobots');
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField : action.payload} );  //{...state, {searchField : action.payload}} Object Destructuring
		default:
			return state;
	}	
}

const initialStateRobots = {  
      isPending:false,
      robots: [],
      error:''
} // Read-Only

export const requestRobots = (state=initialStateRobots, action={}) => {
	console.log('requestRobots');
	switch (action.type) {
		case REQUEST_ROBOTS_PEDNING:
			return Object.assign({}, state, {isPending : true} );  //{...state, {searchField : action.payload}} Object Destructuring
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, {robots : action.payload, isPending : false} );
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {error : action.payload, isPending : false} );
		default:
			return state;
	}	
}

const initialStateStyle = {  
      style :'set1',
} // Read-Only


export const styleChange = (state=initialStateStyle, action={}) => {
	switch (action.type) {
		case CHANGE_STYLE:
			return Object.assign({}, state, {style : action.payload});  //{...state, {searchField : action.payload}} Object Destructuring
		default:
			return state;
	}	
}