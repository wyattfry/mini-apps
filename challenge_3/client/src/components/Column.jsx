import React from 'react';

module.exports = (props) => (
  <div className='column'>
    <div onClick={props.handleClick} className='cell'></div>
    <div onClick={props.handleClick} className='cell'></div>
    <div onClick={props.handleClick} className='cell'></div>
    <div onClick={props.handleClick} className='cell'></div>
    <div onClick={props.handleClick} className='cell'></div>
    <div onClick={props.handleClick} className='cell'></div>
  </div>
);
