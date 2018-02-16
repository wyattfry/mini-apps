import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input.jsx';
import ScoreCard from './ScoreCard.jsx';

let sampleData = [
  [7, 2, -1, -1],
  [9, 1, 3, -1],
  [3, 2, -1, -1],
  [10, 0, 3, 2],
  [3, 2, -1, -1]];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frames: [],
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.getTotalPoints = this.getTotalPoints.bind(this);
  }
  render() {
    return (
        <div>
          <h1>Bowling 🎳</h1>
          <Input handleKeyPress={this.handleKeyPress}/>
          <ScoreCard frames={this.state.frames} total={this.getTotalPoints()}/>
        </div>
    );
  }
  handleKeyPress(e) {
    // e.target.value = # of pins to knock down
    if (e.key === 'Enter') {

      if (!this.validateInput(e.target.value)) {
        alert('Please enter a number, 0 to 10');
      } else {
        this.knockDownPins(Number.parseInt(e.target.value));
      }
      e.target.value = '';
    }
  }
  validateInput(input) {
    input = Number.parseInt(input);
    if (Number.isInteger(input) && input >= 0 && input <= 10) {
      return true;
    }
    return false;
  }
  knockDownPins(pinCount) {
    let frms = this.state.frames;
    // new frame ball 1
    for (var i = 0; i <= frms.length; i++) {
      if (i === frms.length) {
        if (pinCount === 10) {
          frms[i] = [10, 0, -1, -1];
        } else {
          frms[i] = [pinCount, -1, -1, -1];
        }
        break;
      }
      // add to strike
      if (frms[i][0] === 10) {
        if (frms[i][2] === -1) {
          frms[i][2] = pinCount;
        } else if (frms[i][3] === -1) {
          frms[i][3] = pinCount;
        }
      }
      // add to spare
      if (frms[i][0] + frms[i][1] === 10 && frms[i][2] === -1) {
        frms[i][2] = pinCount;
      }
      // ball2
      if (frms[i][1] === -1) {
        frms[i][1] = pinCount;
        i++;
      }
    }
    this.setState({frames: frms});
  }
  getTotalPoints() {
    // add up all elements that are not equal to -1
    // to store in db or whatever
    let sum = 0;
    for (var i = 0; i < 10 && i < this.state.frames.length; i++) {
      for (var j = 0; j < this.state.frames[i].length; j++) {
        sum += this.state.frames[i][j] === -1 ? 0 : this.state.frames[i][j];
      }
    }
    return sum;
  }
}