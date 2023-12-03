import React from 'react';
import PropTypes from 'prop-types';
import './heading.css';

const Heading = ({ text }) => (
  <div className="heading-i-sagie">
    {text}
  </div>
);

Heading.propTypes = {
  text: PropTypes.string,
};

Heading.defaultProps = {
  text: 'heading',
};

export default Heading;
