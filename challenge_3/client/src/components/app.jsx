import React from 'react';
import Board from './Board.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
        <Board />
      );
  }
}
