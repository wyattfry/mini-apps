import React from 'react';
import Column from './Column.jsx';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [[0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0]],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div>
        {this.state.board.map( (c, index) => {
          return <Column
          cells={c}
          key={index}
          column={index}
          handleClick={this.handleClick} /> })}
      </div>
    );
  }
  // Game Logic
  handleClick(e) {
    console.log('click', e);
  }
}
