import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="ButtonPanel">
    <div>
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" operation />
    </div>
    <div>
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" operation />
    </div>
    <div>
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" operation />
    </div>
    <div>
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" operation />
    </div>
    <div className="LastRow">
      <Button name="0" />
      <Button name="." />
      <Button name="=" operation />
    </div>
  </div>
);

export default ButtonPanel;
