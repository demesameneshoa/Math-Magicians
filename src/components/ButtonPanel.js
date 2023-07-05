import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div className="ButtonPanel">
    <div>
      <Button clickHandler={clickHandler} name="AC" />
      <Button clickHandler={clickHandler} name="+/-" />
      <Button clickHandler={clickHandler} name="%" />
      <Button clickHandler={clickHandler} name="÷" operation />
    </div>
    <div>
      <Button clickHandler={clickHandler} name="7" />
      <Button clickHandler={clickHandler} name="8" />
      <Button clickHandler={clickHandler} name="9" />
      <Button clickHandler={clickHandler} name="x" operation />
    </div>
    <div>
      <Button clickHandler={clickHandler} name="4" />
      <Button clickHandler={clickHandler} name="5" />
      <Button clickHandler={clickHandler} name="6" />
      <Button clickHandler={clickHandler} name="-" operation />
    </div>
    <div>
      <Button clickHandler={clickHandler} name="1" />
      <Button clickHandler={clickHandler} name="2" />
      <Button clickHandler={clickHandler} name="3" />
      <Button clickHandler={clickHandler} name="+" operation />
    </div>
    <div className="LastRow">
      <Button clickHandler={clickHandler} name="0" />
      <Button clickHandler={clickHandler} name="." />
      <Button clickHandler={clickHandler} name="=" operation />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;
