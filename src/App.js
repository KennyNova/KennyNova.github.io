import './App.css';
import { useRef } from 'react';
import weatherApp from './images/weatherapp.png'
import pokedex from './images/pokedex.png'
import contactapp from './images/contactapp.png'
import chatapp from './images/chatapp.png'
import github from './images/github_icon.png'
import email from './images/email_icon.png'
import phone from './images/phone_icon.png'

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
        <p className="pointer-events-auto link float-left" onClick={() => { scroll(page1) }}>about me</p>
        <p className="pointer-events-auto link float-left" onClick={() => { scroll(page2) }}>projects</p>
        <p className="pointer-events-auto link float-left" onClick={() => { scroll(page3) }}>contact</p>
        <p className="pointer-events-auto link float-left" onClick={() => { scroll(page4) }}>other</p>
      </span>
      <ul>
        <li ref={page1} className="page1 pt-10">
          <p className="float-left text-base md:text-3xl">
          <img className="image float-left w-20 md:w-52" src="https://pngimg.com/uploads/face/face_PNG5645.png" alt="profile-img" />
            My name is Filippo Rossi. I write code and make stuff.Currently studing CS at the University of Trento.
            I like to experiment with new technologies, creating things that I then use on a daily basis. I am active in the open source community
            and I love bringing people toghether through technology.I also love game development and game jams as a collaborative challenge for me and my friends.
          </p>
        </li>
        <li className="page2 pt-10" ref={page2}>
            <div className="all-projects grid grid-rows-2 grid-flow-col gap-4">
              <div className="project">
                <img className="project-img" src={weatherApp} alt="weather-app-img"/>
                <a href="https://github.com/KennyNova/React-Weather-App" target="_blank" rel="noopener noreferrer">
                  <div className="project-desc">
                    this is Weather App
                  </div>
                </a>
              </div>
              <div className=" project">
                <img className="project-img" src={pokedex} alt="pokedex-img"/>
                <a href="https://github.com/KennyNova/Pokedex" target="_blank" rel="noopener noreferrer">
                  <div className="project-desc">
                    this is Pokedex
                  </div>
                </a>
              </div>
              <div className=" project">
                <img className="project-img" src={chatapp} alt="chat-app-img"/>
                <a href="https://github.com/KennyNova/messaging-app-socket.io" target="_blank" rel="noopener noreferrer"> 
                  <div className="project-desc">
                    this is Socket.io chat app
                  </div>
                </a>
              </div>
              <div className=" project">
                <img className="project-img" src={contactapp} alt="contact-app-img" />
                <a href="https://github.com/KennyNova/new-contact-app" target="_blank" rel="noopener noreferrer">
                  <div className="project-desc">
                    this is Contact app
                  </div>
                </a>
              </div>
            </div>
        </li>
        <li className="page3 pt-10 ml-10 sm:ml-0" ref={page3}>
          <div className="grid auto-cols-auto md:grid-cols-3">
            <a className="github-button inline-block m-auto" href="https://github.com/KennyNova" target="_blank" rel="noopener noreferrer">
              <img className="contact-image githubimg float-left w-8 mr-5 " src={github} alt="github-icon" />
              GitHub
              <p className="subtext">(Click to visit)</p>
            </a>
            <a className="email-button inline-block text-base mt-10 md:m-auto " onClick={() => { navigator.clipboard.writeText("navidmadani4598@gmail.com") }}>
              <img className="contact-image float-left w-8 mr-5 " src={email} alt="email-icon" />
              NavidMadani4598@gmail.com
              <p className="subtext">(Click to copy to clipboard)</p>
            </a>
            <a className="phone-button inline-block mt-10 md:m-auto" href="tel:4047045778">
              <img className="contact-image float-left w-8 mr-5" src={phone} alt="phone-icon" />
              404-704-5778
              <p className="subtext">(Click to call)</p>
            </a>
          </div>
        </li>
        <li className="page4" ref={page4}>
          other
        </li>
      </ul>
      </div>
  );
}

export default App;