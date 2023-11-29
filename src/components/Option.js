import React from 'react';
import { toggleColor } from '../signal.ts';

const Option = () => (
  <div>
    <button type="button" onClick={toggleColor}>toggle</button>
  </div>
);

export default Option;
