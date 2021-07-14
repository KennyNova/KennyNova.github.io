import './styles/App.css';
import './styles/tailwind.css';
import { useRef } from 'react';
import { Aboutme } from './components/Aboutme.js';
import { Projects } from './components/Projects.js';
import { Contactbuttons } from './components/Contactbuttons.js';

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
      <span className="pointer-events-none fixed text-center text-gray-200 pt-5 grid grid-flow-col auto-cols-auto justify-items-center w-full z-10" >
        <p className="pointer-events-auto text-xs md:text-base link float-left" onClick={() => { scroll(page1) }}>about me</p>
        <p className="pointer-events-auto text-xs md:text-base link float-left" onClick={() => { scroll(page2) }}>projects</p>
        <p className="pointer-events-auto text-xs md:text-base link float-left" onClick={() => { scroll(page3) }}>contact</p>
      </span>
      <ul>
        <li className="page1" ref={page1}>
          <Aboutme />
        </li>
        <li className="page2" ref={page2}>
          <Projects />
        </li>
        <li className="page3" ref={page3}>
          <Contactbuttons />
        </li>
      </ul>
      </div>
  );
}

export default App;