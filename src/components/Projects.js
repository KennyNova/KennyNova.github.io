import '../styles/tailwind.css';
import weatherApp from '../images/projects/Weather-App.PNG'
import Pokedex from '../images/projects/Pokedex.PNG'
import Message from '../images/projects/Message-App.PNG'
import Contact from '../images/projects/Contact-App.PNG'

export const Projects = (props) => {
    return (
      <div className="projects md:pr-8 md:pl-8 pointer-events-none">
      <h2 className="mb-10 text-8xl md:text-9xl float-right">projects</h2>
      
      <div className="project">
        <img className="project-image float-left w-full md:w-6/12" alt="weatherimg" src={weatherApp} />
        <div className="float-right">
            <h3 className="project-title">React Weather App</h3>
            <div className="project-desc">
              <p className="text">
              I recently built a weather app using React, which was a great learning experience for me. My primary goal was to
               understand how to access and implement an API. After reading OpenWeather's WeatherAPI documentation, I used the
                'fetch' function to query and display weather data to the user. I then focused on enhancing the app's user interface
                 by designing a card that displayed the current temperature, weather condition, and date. I added a feature that
                  changed the temperature's color based on whether it was hot or cold and created different backgrounds for the
                   app depending on the weather conditions, such as rain or snow. Overall, building the weather app allowed me
                    to explore API integration and UI design, and I'm excited to create more applications in the future.
              </p>
            </div>
            <div className="project-links pointer-events-auto">
              <a className="button live" href="https://react-weather-app-bay-six.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a><a className="button source-code" href="https://github.com/KennyNova/React-Weather-App" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
        </div>
      </div>

      <div className="project ">
        <img className="project-image float-right w-full md:w-6/12" alt="weatherimg" src={Pokedex} />
        <div className="float-left">
          <h3 className="project-title">NextJS Pokedex</h3>
          <div className="project-desc">
              <p className="text">
              In creating this Pokedex, I had the opportunity to work with NextJS and Tailwind for the first time. Using PokeAPI,
               I was able to retrieve the original 151 Pokemons' name, height, weight, and types. By looping through the requests,
                I gathered all the data I needed for each Pokemon. I used Tailwind to streamline my workflow and quickly design the
                 Pokedex's layout, including the home page and each Pokemon's info page. NextJS taught me how to break down my code
                  into smaller components and how to utilize its fetch method to efficiently access the API data. Additionally,
                   I added a "caught" checkbox tracker that saves into the browser's cookies. This project allowed me to improve my
                    API integration skills, enhance my design capabilities, and explore new technologies, leaving me excited to
                     continue building innovative applications in the future.
              </p>
          </div>
          <div className="project-links pointer-events-auto">
            <a className="button live" href="https://pokedex-ten-beta.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a><a className="button source-code" href="https://github.com/KennyNova/Pokedex" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      </div>

      <div className="project">
        <img className="project-image float-left w-full md:w-6/12" alt="weatherimg" src={Message} />
        <div className="float-right">
          <h3 className="project-title">Socket.io App</h3>
          <div className="project-desc">
            <p className="text">
            Developing this chat app was tough, but also really satisfying. I had to create my first REST API, which involved using Socket.io and
             Express. At first, I just focused on getting basic requests to work between the frontend and backend, like sending and saving
              messages. Once I had the hang of it, I built the more complex parts of the app, like connecting to chat rooms and storing messages
               in a database. Then, I created a simple user interface where users can choose a username and select which text channel they want
                to join. When they enter a channel, they're automatically connected with other users there, and all previous messages are loaded
                 up. I also learned how to host the app in the cloud using a docker container, which was a new experience for me.
            </p>
          </div>
          <div className="project-links pointer-events-auto">
            <a className="button source-code" href="https://github.com/KennyNova/messaging-app-socket.io" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      </div>

      <div className="last-project pointer-events-none">
        <img className="project-image float-right w-full md:w-6/12" alt="weatherimg" src={Contact} />
        <div className="float-left">
          <h3 className="project-title">Contact App</h3>
          <div className="project-desc">
            <p className="text">
            This contact app was one of my first projects, and it served as a great introduction to React and its hooks. Using the useState hook,
             I was able to easily create variables and objects. With the useEffect hook, I developed a search function that allows users to easily
              search through their contacts by name or number. Overall, it was a simple yet effective way to get started with React and its powerful
               features.
            </p>
          </div>
          <div className="project-links pointer-events-auto">
            <a className="button live" href="https://new-contact-app.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a><a className="button source-code" href="https://github.com/KennyNova/new-contact-app" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      </div>

    </div>
    )
}