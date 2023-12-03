import React from 'react';
import Aboutme from './Aboutme';
import './cards.scss';
import { colorToggle, color } from '../signal.ts';

const Cards = () => {
  const style = {
    color: colorToggle(!color.value),
    background: colorToggle(color.value),
  };
  return (
    <div style={style} className="cards-i-sagie">
      <Aboutme />
    </div>
  );
};

export default Cards;
