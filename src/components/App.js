import { color } from '../signal.ts';
import About from './About';
import Cards from './Cards';

function App() {
  const { value } = color;
  const styles = {
    fontFamily: 'Lekton, sans-serif',
    margin: '0 auto',
    backgroundColor: value ? '#161616' : '#F6F6F6',
    color: !value ? '#646464' : '#fff',
  };
  return (
    <div style={styles} className="App">
      <About />
      <Cards />
      <div />
    </div>
  );
}
export default App;
