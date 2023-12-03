import { signal } from '@preact/signals-react';

type SignalNumber = ReturnType<typeof signal<number>>;
type SignalBoolean = ReturnType<typeof signal<boolean>>;

const name: SignalNumber = signal<number>(0);
const color: SignalBoolean = signal<boolean>(false);

const colorToggle = (bool: boolean): string => (bool ? '#222222' : '#fff');

const toggleColor = () => {
  color.value = !color.value;
};

export { name, color, toggleColor, colorToggle };
