import './App.css';
import { useRef } from 'react';
import weatherApp from './images/weatherapp.png'
import pokedex from './images/pokedex.png'
import contactapp from './images/contactapp.png'
import chatapp from './images/chatapp.png'

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
        <li ref={page1} className="about-me justify-items-center grid grid-flow-col auto-cols-auto">about me
            <img className="mt-64 max-w-sm max-h-sm" src="https://pngimg.com/uploads/face/face_PNG5645.png" />
            <span className="about-me mt-80 mr-4">
              My name is Filippo Rossi. I write code and make stuff.Currently studing CS at the University of Trento.
              I like to experiment with new technologies, creating things that I then use on a daily basis. I am active in the open source community
              and I love bringing people toghether through technology.I also love game development and game jams as a collaborative challenge for me and my friends.
            </span>
        </li>
        <li className=" page2" ref={page2}>
            <div className="h-3/4 grid grid-rows-2 grid-flow-col gap-4">
              <div className=" project">
                <img className="project-img" src={weatherApp}/>
                <a href="https://github.com/KennyNova/React-Weather-App" target="_blank">
                  <div className="project-desc">
                    this is Weather App
                  </div>
                </a>
              </div>
              <div className=" project">
                <img className="project-img" src={pokedex}/>
                <a href="https://github.com/KennyNova/Pokedex" target="_blank">
                  <div className="project-desc">
                    this is Pokedex
                  </div>
                </a>
              </div>
              <div className=" project">
                <img className="project-img" src={chatapp}/>
                <a href="https://github.com/KennyNova/messaging-app-socket.io" target="_blank">
                  <div className="project-desc">
                    this is Socket.io chat app
                  </div>
                </a>
              </div>
              <div className=" project">
                <img className="project-img" src={contactapp}/>
                <a href="https://github.com/KennyNova/new-contact-app" target="_blank">
                  <div className="project-desc">
                    this is Contect app
                  </div>
                </a>
              </div>
            </div>
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
