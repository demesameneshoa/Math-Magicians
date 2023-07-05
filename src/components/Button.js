import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, operation, clickHandler }) => {
  const className = operation ? 'button operation-button' : 'button';
  return (
    <button onClick={() => clickHandler(name)} type="button" className={className}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  operation: PropTypes.bool,
  clickHandler: PropTypes.isRequired,
};

Button.defaultProps = {
  operation: false,
};
export default Button;
