import '../styles/tailwind.css';
import weatherApp from '../images/projects/Weather-App.PNG'
import Pokedex from '../images/projects/Pokedex.PNG'
import Contact from '../images/projects/Contact-App.PNG'

export const Projects = (props) => {
    return (
      <div className="projects md:pr-8 md:pl-8">
      <h2 className="mb-10 text-8xl md:text-9xl float-right">projects</h2>
      
      <div className="project">
        <img className="project-image float-left w-full md:w-4/12" alt="weatherimg" src={weatherApp} />
        <div className="float-right">
            <h3 className="project-title">React Weather App</h3>
            <div className="project-desc">
              <p className="text">
                I created this weather app using react. I went into creating this app with the intention of learning how to access and
                implement an api. I learned how to use fetch, to pull information from the api, and learned a lot by styling 
                the frontend. I was then able to use this knowledge in other apps.
              </p>
            </div>
            <div className="project-links">
              <a className="button live" href="https://react-weather-app-bay-six.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a><a className="button source-code" href="https://github.com/KennyNova/React-Weather-App" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
        </div>
      </div>

      <div className="project ">
        <img className="project-image float-right w-full md:w-4/12" alt="weatherimg" src={Pokedex} />
        <div className="float-left">
          <h3 className="project-title">NextJS Pokedex</h3>
          <div className="project-desc">
              <p className="text">
                When creating this Pokedex it was the first time I had ever used NextJS and Tailwind. Tailwind
                made styling the frontend much easier and made my workflow much more simpler. I learned how to break down my
                code into components and how to use NextJS's way to fetch data from an api.
              </p>
          </div>
          <div className="project-links">
            <a className="button live" href="https://pokedex-ten-beta.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a><a className="button source-code" href="https://github.com/KennyNova/Pokedex" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      </div>

      <div className="project">
        <img className="project-image float-left w-full md:w-4/12" alt="weatherimg" src={weatherApp} />
        <div className="float-right">
          <h3 className="project-title">Socket.io Messaging App</h3>
          <div className="project-desc">
            <p className="text">
              Creating this chat app was a difficult but very rewarding task. I have learned so much from using Socket.io.
              I had also learned how to create my own postgres database and how to connect it to my app to store users and messages.
            </p>
          </div>
          <div className="project-links">
            <a className="button source-code" href="https://github.com/KennyNova/messaging-app-socket.io" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      </div>

      <div className="last-project">
        <img className="project-image float-right w-full md:w-4/12" alt="weatherimg" src={Contact} />
        <div className="float-left">
          <h3 className="project-title">Contact App</h3>
          <div className="project-desc">
            <p className="text">
              This contact app was one of my first apps and it helped introduce me to react. I learned about useState and useEffect
              which are very helpful hooks when creating an app. I also learned how to read and write cookies to save the users contacts.
            </p>
          </div>
          <div className="project-links">
            <a className="button live" href="https://new-contact-app.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a><a className="button source-code" href="https://github.com/KennyNova/new-contact-app" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      </div>

    </div>
    )
}