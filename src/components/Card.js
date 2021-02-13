import React, {Component} from 'react';


const Card = (props) => {
    const { id, name, email, style }= props;
    return (
    <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt = 'robots' src = {`https://robohash.org/${id}?set=${style}&size=200x200`}/>
      <div>
       <h5>{name}</h5>
       <p>{email}</p>
      </div>
    </div> 
    ); 
}
export default Card;