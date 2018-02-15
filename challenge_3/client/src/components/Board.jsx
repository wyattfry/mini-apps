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
        <Column handleClick={ this.handleClick.bind(this) } />
        <Column handleClick={ this.handleClick.bind(this) } />
        <Column handleClick={ this.handleClick.bind(this) } />
        <Column handleClick={ this.handleClick.bind(this) } />
        <Column handleClick={ this.handleClick.bind(this) } />
        <Column handleClick={ this.handleClick.bind(this) } />
        <Column handleClick={ this.handleClick.bind(this) } />
      </div>
    );
  }
  // Game Logic
  handleClick(e) {
    console.log('click', e);
  }
}
