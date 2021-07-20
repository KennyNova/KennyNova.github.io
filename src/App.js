import './styles/App.css';
import './styles/tailwind.css';
import { splitWordAnimation } from './module/split.js';

function App() {
  return (
    <div className="container">
      <div className="intro">
        <a className="know-more" href="#about">click me</a>
        {splitWordAnimation('hello my name is navid', "and welcome to my portfolio")}
        
      </div>
      <div id="about" >
        <h2>about me</h2>
          <p className="text">
                      My name is Navid Madani. I am currently a CS student at Georgia State University. I've have always enjoyed learning
           about new technologies and implementing them into my day to day life. I aspire to become a Full Stack developer as I love
           working in both the frontend and backend. I am working everyday to achieve this goal by learning as much as I can and then
           using that knowledge to create apps.
          </p>

        <h2>projects</h2>
              <div className="">
                <a href="https://github.com/KennyNova/React-Weather-App" target="_blank" rel="noopener noreferrer"> 
                <h2 className="border-b-4 border-blue-400">React Weather App</h2>
                <div className="">
                  <p className="">
                    I created this weather app using react. I went into creating this app with the intention of learning how to access and
                    implement an api. I learned how to use fetch, to pull information from the api, and learned a lot by styling 
                    the frontend. I was then able to use this knowledge in other apps.
                  </p>
                </div>
                </a>
              </div>
      </div>
    </div>
  );
}

export default App;