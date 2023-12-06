import { signal } from '@preact/signals-react';

const name = signal(0);
const color = signal(false);

const colorToggle = (bool) => (bool ? '#222222' : '#fff');

const toggleColor = () => {
  color.value = !color.value;
};

export {
  name, color, toggleColor, colorToggle,
};
