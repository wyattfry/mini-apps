import React from 'react';
import Column from './Column.jsx';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: {},
    }
  }
  render() {
    return (
      <div>
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    );
  }
  // Game Logic
}
