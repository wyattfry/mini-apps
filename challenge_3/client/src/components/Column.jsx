import React from 'react';

const Column = (props) => (
  <div className='column'>

    {props.cells.map( (cell, index) =>
      <div
        key={index}
        onClick={() => props.handleClick(props.column)}
        className='cell'>
      </div> )}
  </div>
);

export default Column;