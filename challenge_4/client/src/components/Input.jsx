import React from 'react';
const Input = (props) => <input
  type="text"
  onKeyPress={(e) => (props.handleKeyPress(e))}
  placeholder="Pins knocked down (0-10)"/>;
export default Input;
