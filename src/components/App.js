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
  const displayMode = value ? 'u982y38wydg-dark-mode' : 'u982y38wydg-light-mode';

  return (
    <div style={styles} className="App">
      <div id="about-i-sagie" className="wdth">
        <Option />
        <About />
      </div>
      <div id="cards-i-sagie" className={`${displayMode} wdth`}>
        <Cards />
      </div>
      <div />
    </div>
  );
}
export default App;
