import React, {Component} from 'react';
import Card from './Card';

const Cardlist = (props) => {
    const { robots, style } = props;
    const cardComponent = robots.map((robot, i) => {
      return (<Card 
        key = {i} 
        id = { robot.id } 
        name = { robot.name } 
        email = { robot.email }
        style = {style}
        />);
    });
    return (
    <div>
    {cardComponent}
    </div> 
    ); 
}
export default Cardlist;