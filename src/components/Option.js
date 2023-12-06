import React from 'react';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { toggleColor, color } from '../signal';
import './option.scss';

const Option = () => {
  const { value } = color;
  const iconStyle = {
    color: value ? '#fff' : '#646464',
  };

  return (
    <button type="button" className="option-7263j" onClick={toggleColor}>
      {color.value ? <MdOutlineLightMode style={iconStyle} />
        : <MdOutlineNightlight style={iconStyle} />}
    </button>
  );
};

export default Option;
