import React from 'react';

let sum = 0;
var calcSum = function (frame) {
  let tempSum = +frame[0];
  tempSum += frame[1] === -1 ? 0 : frame[1]; 
  tempSum += frame[2] === -1 ? 0 : frame[2];
  tempSum += frame[3] === -1 ? 0 : frame[3];
  return tempSum;
}

var ScoreCard = (props) => (
  <table>
    <tbody>
      <tr><th>Frame</th><th>Ball 1</th><th>Ball 2</th><th>Frame<br/>Score</th></tr>

      {props.frames.map( (frame, index) => (
        <tr key={index}>
          <td>{index > 9 ? '---' : index + 1}</td>
          <td>{frame[0] === 10 ? 'X' : frame[0]}</td>
          <td>{frame[0] !== 10 && frame[0] + frame[1] === 10 ? '/' : frame[1] === -1 ? '' : frame[1]}</td>
          <td>{index > 9 ? '---' : calcSum(frame)}</td>
        </tr>
        ))}
      <tr><td></td><td></td><td></td><td>Game Total: {props.total}</td></tr>
    </tbody>
  </table>
  );

export default ScoreCard;