import './App.css';
import { useRef } from 'react';

function App() {
  const page1 = useRef(null)
  const page2 = useRef(null)
  const page3 = useRef(null)
  const page4 = useRef(null)

  function scroll(page){
    page.current.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }

  return (
    <div className="main-window bg-gradient-to-b from-purple-600 to-blue-800 ">
      <span className="fixed text-gray-200 pt-10 grid grid-flow-col auto-cols-auto justify-items-center w-full " >
        <p className="link float-left" onClick={() => { scroll(page1) }}>about me</p>
        <p className="link float-left" onClick={() => { scroll(page2) }}>projects</p>
        <p className="link float-left" onClick={() => { scroll(page3) }}>contact</p>
        <p className="link float-left" onClick={() => { scroll(page4) }}>other</p>
      </span>
      <ul>
        <li ref={page1}>about me
            
        </li>
        <li ref={page2}>projects
            
        </li>
        <li ref={page3}>contact
                
        </li>
        <li ref={page4}>other
                
        </li>
      </ul>
      </div>
  );
}

export default App;
