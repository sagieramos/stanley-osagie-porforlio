import React from 'react';
import PropTypes from 'prop-types';
import './title.scss';
import { color } from '../signal.ts';

const Title = ({ text }) => {
  const firstCharColor = '#f6b846';
  const firstChar = text.charAt(0);
  const displayMode = color.value ? 'title-i-dark-mode' : 'title-i-light-mode';

  return (
    <div className={`title-i-sagie ${displayMode}`}>
      <h2>
        <span style={{ color: firstCharColor }}>{firstChar}</span>
        {text.slice(1)}
      </h2>
      <div />
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string,
};

Title.defaultProps = {
  text: 'heading',
};

export default Title;
