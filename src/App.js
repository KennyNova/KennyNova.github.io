import './styles/App.css';
import './styles/tailwind.css';
import { splitWord } from './module/split.js';

function App() {



  return (
    <div className="container">
      <div className="intro">
        {splitWord('hello my name is navid')}
      </div>
    </div>
  );
}

export default App;