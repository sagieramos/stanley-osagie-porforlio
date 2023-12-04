import { color } from '../signal.ts';
import About from './About';
import Cards from './Cards';
import Option from './Option';
import './app.scss';

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
      <Option />
      <div id="about-i-sagie"><About /></div>
      <div id="cards-i-sagie"><Cards /></div>
      <div />
    </div>
  );
}
export default App;
