import { color } from '../signal.ts';
import About from './About';
import AboutMe from './AboutMe';

function App() {
  const { value } = color;
  const styles = {
    fontFamily: 'Lekton, sans-serif',
    margin: '0 auto',
    height: '100vh',
    width: '100wh',
    backgroundColor: value ? '#161616' : '#F6F6F6',
    color: !value ? '#646464' : '#fff',
  };
  return (
    <div style={styles} className="App">
      <About />
      <AboutMe />
      <div />
    </div>
  );
}
export default App;
