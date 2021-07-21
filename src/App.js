import './styles/App.css';
import './styles/tailwind.css';
import { splitWordAnimation } from './module/split.js';
import weatherApp from './images/projects/Weather-App.PNG'

function App() {
  return (
    <div className="container">
      <div className="intro">
        <a className="button learn-more" href="#learnMore">learn more</a>
        {splitWordAnimation('hello my name is navid', "and welcome to my portfolio")}
        
      </div>
      <svg className="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  ><path fill="#142129" fill-opacity="1" d="M0,224L80,229.3C160,235,320,245,480,224C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <div id="learnMore" >
        <div className="about-me">
          <h2>about me</h2>
          <a className="button resume float-right">resume</a>
          <p className="text about-desc">
              My name is Navid Madani. I am currently a CS student at Georgia State University. I've have always enjoyed learning
            about new technologies and implementing them into my day to day life. I aspire to become a Full Stack developer as I love
            working in both the frontend and backend. I am working everyday to achieve this goal by learning as much as I can and then
            using that knowledge to create apps.
          </p>
        </div>
       
       
        <svg className="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  width="100vw"><path fill="#CAD2C5" fill-opacity="1" d="M0,320L80,272C160,224,320,128,480,128C640,128,800,224,960,250.7C1120,277,1280,235,1360,213.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
       
       
          <div className="projects">
            <h2 className="mb-10 float-right">projects</h2>
            
            <div className="weather-app">
              <a href="https://github.com/KennyNova/React-Weather-App" target="_blank" rel="noopener noreferrer">
                <img className="project-image float-left" alt="weatherimg" src={weatherApp} />
                <div className="project float-right">
                    <h3 className="project-title">React Weather App</h3>
                    <div className="project-desc">
                      <p className="text">
                        I created this weather app using react. I went into creating this app with the intention of learning how to access and
                        implement an api. I learned how to use fetch, to pull information from the api, and learned a lot by styling 
                        the frontend. I was then able to use this knowledge in other apps.
                      </p>
                    </div>
                </div>
              </a>
            </div>

            <div className="pokedex">
                <a href="https://github.com/KennyNova/Pokedex" target="_blank" rel="noopener noreferrer"> 
                  <img className="project-image float-right" alt="weatherimg" src={weatherApp} />
                  <div className="project float-left">
                    <h3 className="project-title">NextJS Pokedex</h3>
                    <div className="project-desc">
                        <p className="text">
                          When creating this Pokedex it was the first time I had ever used NextJS and Tailwind. Tailwind
                          made styling the frontend much easier and made my workflow much more simpler. I learned how to break down my
                          code into components and how to use NextJS's way to fetch data from an api.
                        </p>
                    </div>
                  </div>
                </a>
            </div>

            <div className="messaging-app">
                <a href="https://github.com/KennyNova/messaging-app-socket.io" target="_blank" rel="noopener noreferrer">
                    <img className="project-image float-left" alt="weatherimg" src={weatherApp} />
                  <div className="project float-right">
                    <h3 className="project-title">Socket.io Messaging App</h3>
                    <div className="project-desc">
                      <p className="text">
                        Creating this chat app was a difficult but very rewarding task. I have learned so much from using Socket.io.
                        I had also learned how to create my own postgres database and how to connect it to my app to store users and messages.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

            <div className="contact-app">
              <a href="https://github.com/KennyNova/new-contact-app" target="_blank" rel="noopener noreferrer">
                  <img className="project-image float-right" alt="weatherimg" src={weatherApp} />
                <div className="project float-left">
                  <h3 className="project-title">Contact App</h3>
                  <div className="project-desc">
                    <p className="text">
                      This contact app was one of my first apps and it helped introduce me to react. I learned about useState and useEffect
                      which are very helpful hooks when creating an app. I also learned how to read and write cookies to save the users contacts.
                    </p>
                  </div>
                </div>
              </a>
            </div>



          </div>
      </div>
    </div>
  );
}

export default App;