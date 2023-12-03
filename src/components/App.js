import About from './About';
import { color } from '../signal.ts';

function App() {
  const styles = {
    margin: '0 auto',
    height: '100vh',
    width: '100wh',
    backgroundColor: color.value ? '#161616' : '#fff',
  };
  return (
    <div style={styles} className="App">
      <About />
      <div />
    </div>
  );
}
export default App;
