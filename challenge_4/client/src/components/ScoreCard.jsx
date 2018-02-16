import React from 'react';

var ScoreCard = (props) => (
  <table>
    <tbody>
      <tr><th>Frame</th><th>Ball 1</th><th>Ball 2</th><th>Frame<br/>Score</th><th>Total<br/>Score</th></tr>

      {props.frames.map( (frame, index) => (
        <tr key={index}>
          <td>{frame.number}</td>
          <td>{frame.ball1}</td>
          <td>{frame.ball2}</td>
          <td>{frame.frameScore}</td>
          <td>{frame.totalScore}</td>
        </tr>
        ))}
      
    </tbody>
  </table>
  );

export default ScoreCard;