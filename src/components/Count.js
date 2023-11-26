import name from '../signal.ts';

const Count = () => {
  const incrementCount = () => {
    name.value += 1;
  };

  console.log(name);

  return (
    <div>
      <button type="button" onClick={incrementCount}>
        {name.value}
      </button>
    </div>
  );
};

export default Count;
