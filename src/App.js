import './App.css';
import { useRef } from 'react';

function App() {
  const page1 = useRef(null)
  const page2 = useRef(null)

  const executeScroll = (p) => {
    console.log(p);
    page1.current.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }

  return (
    <div className="main-window bg-gradient-to-b to-blue-800 from-purple-600">
      <span className="fixed text-gray-200 justify-items-center" >
        <a onClick={executeScroll(0)} className="justify-items-center">home</a>
        <a onClick={executeScroll}>login</a>
        <a onClick={executeScroll}>register</a>
      </span>
      <ul>
        <li ref={page1}>part1
            
        </li>
        <li ref={page2}>part2
            
        </li>
        <li>part3
                
        </li>
      </ul>
      </div>
  );
}

export default App;
