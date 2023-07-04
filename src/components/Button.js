import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, operation }) => {
  const className = operation ? 'button operation-button' : 'button';
  return (
    <button type="button" className={className}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  operation: PropTypes.bool,
};

Button.defaultProps = {
  operation: false,
};
export default Button;
