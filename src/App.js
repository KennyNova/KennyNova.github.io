import './styles/App.css';
import './styles/tailwind.css';
import { useRef } from 'react';
import { Slideshow } from './components/Slideshow.js';
import { Aboutme } from './components/Aboutme.js'
import weatherApp from './images/projects/weatherapp.png'
import pokedex from './images/projects/pokedex.png'
import contactapp from './images/projects/contactapp.png'
import chatapp from './images/projects/chatapp.png'
import github from './images/icons/github_icon.png'
import email from './images/icons/email_icon.png'
import phone from './images/icons/phone_icon.png'

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
        <p className="pointer-events-auto text-xs md:text-base link float-left" onClick={() => { scroll(page4) }}>Photography</p>
      </span>
      <ul>
        <li ref={page1} className="page1 pt-10">
          {/* <p className="float-left text-base md:text-3xl">
            <img className="image float-left w-20 md:w-52" src={profile} alt="profile-img" />
            My name is Navid Madani. I am currently a CS student at Georgia State University. I've have always enjoyed learning
           about new technologies and implementing them into my day to day life. I aspire to become a Full Stack developer as I love
           working in both the frontend and backend. I am working everyday to achieve this goal by learning as much as I can and then
           using that knowledge to create apps.
          </p> */}
          <Aboutme />
        </li>
        <li className="page2 pt-10" ref={page2}>
            <div className="all-projects grid grid-rows-2 grid-flow-col gap-4">
              <div className="project">
                <img className="project-img" src={weatherApp} alt="weather-app-img"/>
                <a href="https://github.com/KennyNova/React-Weather-App" target="_blank" rel="noopener noreferrer">
                <div className="project-desc">
                  <p className="m-5 leading-loose">
                    I created this weather app using react. I went into creating this app with the intention of learning how to access and
                    implement an api. I learned how to use fetch, to pull information from the api, and learned a lot by styling 
                    the frontend. I was then able to use this knowledge in other apps.
                  </p>
                </div>
                </a>
              </div>
              <div className=" project">
                <img className="project-img" src={pokedex} alt="pokedex-img"/>
                <a href="https://github.com/KennyNova/Pokedex" target="_blank" rel="noopener noreferrer">
                <div className="project-desc">
                  <p className="m-5 leading-loose">
                  When creating this Pokedex it was the first time I had ever used NextJS and Tailwind. Tailwind
                 made styling the frontend much easier and made my workflow much more simpler. I learned how to break down my
                 code into components and how to use NextJS's way to fetch data from an api.
                  </p>
                </div>
                </a>
              </div>
              <div className=" project">
                <img className="project-img" src={chatapp} alt="chat-app-img"/>
                <a href="https://github.com/KennyNova/messaging-app-socket.io" target="_blank" rel="noopener noreferrer"> 
                <div className="project-desc">
                  <p className="m-5 leading-loose">
                    Creating this chat app was a difficult but very rewarding task. I have learned so much from using Socket.io.
                    I had also learned how to create my own postgres database and how to connect it to my app to store users and messages.
                  </p>
                  </div>
                </a>
              </div>
              <div className=" project">
                <img className="project-img" src={contactapp} alt="contact-app-img" />
                <a href="https://github.com/KennyNova/new-contact-app" target="_blank" rel="noopener noreferrer">
                <div className="project-desc">
                  <p className="m-5 leading-loose">
                    This contact app was one of my first apps and it helped introduce me to react. I learned about useState and useEffect
                    which are very helpful hooks when creating an app. I also learned how to read and write cookies to save the users contacts.
                  </p>
                </div>
                </a>
              </div>
            </div>
        </li>
        <li className="page3 pt-10 ml-0 " ref={page3}>
          <div className="grid auto-cols-auto md:grid-cols-3 place-items-center">
            <a className="github-button inline-block m-auto w-72" href="https://github.com/KennyNova" target="_blank" rel="noopener noreferrer">
              <img className="contact-image githubimg float-left w-8 mr-0 " src={github} alt="github-icon" />
              GitHub
              <p className="subtext">(Click to visit)</p>
            </a>
            <a className="email-button inline-block max-h-24 text-base mt-10 md:m-auto  md:w-auto lg:w-96 " onClick={() => { navigator.clipboard.writeText("navidmadani4598@gmail.com") }}>
              <img className="contact-image float-left w-8 mr-5" src={email} alt="email-icon" />
              NavidMadani4598@gmail.com
              <p className="subtext">(Click to copy to clipboard)</p>
            </a>
            <a className="phone-button inline-block mt-10 md:m-auto w-72 " href="tel:4047045778">
              <img className="contact-image float-left w-8 mr-5" src={phone} alt="phone-icon" />
              404-704-5778
              <p className="subtext">(Click to call)</p>
            </a>
          </div>
        </li>
        <li className="page4" ref={page4}>
          <Slideshow />
        </li>
      </ul>
      </div>
  );
}

export default App;