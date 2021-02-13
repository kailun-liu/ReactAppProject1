import React, {Component} from 'react';


const AvatarStyle = ({onStyleChange}) => {
    return (
      <div >
        <button className='f6 link dim ph3 pv2 mb2 dib white bg-light-purple pa3 ma2' key='set1' onClick= {onStyleChange} type="button" value='set1' >Robot</button>
        <button className='f6 link dim ph3 pv2 mb2 dib white bg-light-purple pa3 ma2' key='set2' onClick= {onStyleChange} type="button" value='set2' >Alien</button>
        <button className='f6 link dim ph3 pv2 mb2 dib white bg-light-purple pa3 ma2' key='set3' onClick= {onStyleChange} type="button" value='set3' >Avatar</button>
        <button className='f6 link dim ph3 pv2 mb2 dib white bg-light-purple pa3 ma2' key='set4' onClick= {onStyleChange} type="button" value='set4' >Cat</button>
        <button className='f6 link dim ph3 pv2 mb2 dib white bg-light-purple pa3 ma2' key='set5' onClick= {onStyleChange} type="button" value='set5' >Human</button>
      </div>
    ); 
}
export default AvatarStyle;