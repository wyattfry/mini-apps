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
    }
  }
  render() {
    return (
      <div>
        {this.state.board.map( (c, index) =>
          <Column
          cells={c}
          key={index}
          handleClick={ this.handleClick.bind(this) } /> )}
      </div>
    );
  }
  // Game Logic
  handleClick(e) {
    console.log('click', e);
  }
}
