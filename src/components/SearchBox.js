import React, {Component} from 'react';

const SearchBox = ({searchField, onSearchChange}) => {
    return (
      <div className = 'pa2'>
        <input 
        onChange={onSearchChange} 
        className = 'pa3 ba b--green bg-lightest-blue' 
        types='search' 
        placeholder='search name'/>
      </div>    
    ); 
}

export default SearchBox;