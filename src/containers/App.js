import React, { useState, useEffect} from 'react';
import Cardlist from '../components/Cardlist';
import AvatarStyle from '../components/AvatarStyle';
import SearchBox from '../components/SearchBox';
import { robots } from '../components/robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'
import { setSearchField, setRequestRobots, setStyleChange } from '../actions' 
import { connect } from 'react-redux';


const mapStateToProps = (state) => { //send object to the props
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
    style: state.styleChange.style
  }
}

const mapDispatchToProps = (dispatch) => { //send object to the props
  return {
   onSearchChange: (event) => dispatch(setSearchField(event.target.value)), //dispatch an action to reducer
   onRequestRobots: ()=> dispatch(setRequestRobots()), //setRequestRobots() would be caught by thunk-redux, and give it a dispatch
   onStyleChange: (event)=>dispatch(setStyleChange(event.target.value))
  }
}

function App (props) {

  const [count, setCount] = useState(0);
  useEffect(()=>{
    props.onRequestRobots();
  }, []) // if the second param is changed, useEffect will be called.

  
  const filterZombies = props.robots.filter((robot)=>robot.name.toLowerCase().includes(props.searchField.toLowerCase()));
  if (!props.isPending)
  {
      return (
      (<div className='tc'>
        <p id = 'p'>Friends</p>
        <AvatarStyle onStyleChange = {props.onStyleChange}/>
        <SearchBox onSearchChange= {props.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <Cardlist robots = { filterZombies } style = {props.style} />
          </ErrorBoundary>
        </Scroll>
      </div>)
     )
  }
  else
  {
      return <h1>Loading</h1>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); //subcribe any state changes in the Redux Store
//mapStateToProps, what state App should listen to
//mapDispatchToProps, what action App should listen to
