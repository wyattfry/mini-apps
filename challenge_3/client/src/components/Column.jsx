import React from 'react';

module.exports = (props) => (
  <div className='column'>

    {props.cells.map( (cell, index) =>
      <div
        className={(cell === 0) ? 'red' : 'black'}
        key={index}
        onClick={props.handleClick}
        className='cell'>
      </div> )}
  </div>
);
