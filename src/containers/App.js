import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import AvatarStyle from '../components/AvatarStyle';
import SearchBox from '../components/SearchBox';
import { robots } from '../components/robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'
 

class App extends Component {
  constructor() {
    super();
    this.state = {  
      robots:[],
      searchField:'',
      style:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json() )
      .then(users=>this.setState({robots:users}))
  }

  onSearchChange = (event) => { //using arrow functions to make sure this (context) is where it was created.
    this.setState({searchField:event.target.value})
  }

  onStyleChange = (event) => {
    this.setState({style:event.target.value})
  }

  render() {
    const filterZombies = this.state.robots.filter((robot)=>robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    if (this.state.robots)
    {
        return (
        (<div className='tc'>
          <p id = 'p'>Friends</p>
          <AvatarStyle onStyleChange = {this.onStyleChange}/>
          <SearchBox onSearchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <Cardlist robots = { filterZombies } style = {this.state.style} />
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
}
export default App;
