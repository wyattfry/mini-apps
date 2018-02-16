import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input.jsx';
import ScoreCard from './ScoreCard.jsx';

var sampleData = [
  {
    number: '1',
    ball1: '7',
    ball2: '2',
    frameScore: '9',
    totalScore: '9',
  },
  {
    number: '2',
    ball1: '7',
    ball2: '/',
    frameScore: '13',
    totalScore: '22',
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.frames = [];
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  render() {
    return (
        <div>
          <h1>Bowling 🎳</h1>
          <Input handleKeyPress={this.handleKeyPress}/>
          <ScoreCard frames={sampleData}/>
        </div>
      );
  }
  handleKeyPress(input) {
    // input = # of pins to knock down
    if (input.key === 'Enter') {

      if (!this.validateInput(input.target.value)) {
        alert('Please enter a number, 0 to 10');
      } else {
        this.knockDownPins(input.target.value);
      }

      input.target.value = '';
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
    // main game logic
    
  }
}