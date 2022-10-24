import '../styles/tailwind.css';
import weatherApp from '../images/projects/Weather-App.PNG'
import Pokedex from '../images/projects/Pokedex.PNG'
import Message from '../images/projects/Message-App.PNG'
import Contact from '../images/projects/Contact-App.PNG'

export const Projects = (props) => {
    return (
      <div className="projects md:pr-8 md:pl-8">
      <h2 className="mb-10 text-8xl md:text-9xl float-right">projects</h2>
      
      <div className="project">
        <img className="project-image float-left w-full md:w-6/12" alt="weatherimg" src={weatherApp} />
        <div className="float-right">
            <h3 className="project-title">React Weather App</h3>
            <div className="project-desc">
              <p className="text">
                I created this weather app using react. I went into creating this app with the intention of learning how to access and
                implement an api. I first read OpenWeather's WeatherAPI documentation to learn what information could access with the api
                 I then learned how to use fetch to pull information from the api using a key. Once i was able to query results and display them to the user 
                I worked on styling the app. I wanted the UI to be intuitive and for the informtion to be displayed in a clear and concise manner.
                I displayed the current temperature and weather conditon in a card with the date. For a better UI experience 
                 I made the current temperature change colors depending on how hot or cold it was. I also added transitions and diffrent bacground depending on
                  the weather conditions such as rain or snow.
              </p>
            </div>
            <div className="project-links">
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
                When creating this Pokedex it was the first time I had ever used NextJS and Tailwind. I first used my previous knowledge on API's on PokeAPI
                and pulled the original 151 pokemons' name, height, weight, and types. Once I got the API working for the first pokemon I looped the request
                to get all 151 pokemon. I also used the list of pokemon name the api gave me to find images of the pokemon from their offical site.
                Once I had all the data I worked on designing the pokedex. Tailwind made my workflow much more simpler and faster, when designing the app with
                 Tailwind I was able to quickly create a grid and general layout of the Pokedex in seconds. After getting the layout and design of the home page
                  done i worked on designing the pokemon's info page. Using the info from the PokeAPI I was able to display the pokemons' information in imperical
                 or metric units. After finishing I decieded to add a caught checkbox tracker which saves into the browsers cookies  
                 With NextJS I learned how to break down my code into smaller components, which made going through my code easier. NextJS' fetch method
                 also made it very easy to pull all the data I needed from the API.
              </p>
          </div>
          <div className="project-links">
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
              Creating this chat app was a difficult but very rewarding task, which involved creating my first REST API. After reading upon Socket.io and Express'
               documentation I quickly got started on creating basic requests that allowed the frontend to speak to the backend. After getting the basics down and
                saving my first message I went on to creating the logic
               behind connecting to chat rooms and sending/saving all messages to a database. Once I was able to succesfully read and write form the database I got started
               on creating a simple ui which prompts the user to create a unique username and choose text channel they want to enter. upon load Socket.io connects the user
               to the selected channel and connects the user with all other users in the channel. A request is also sent to the backend to get all previous messages to be
                displayed upon login into a chatroom. This also was my first time with hosting my app in the cloud. Which involved creating a docker container that also
                could create and use the postgres database I had setup. 
            </p>
          </div>
          <div className="project-links">
            <a className="button source-code" href="https://github.com/KennyNova/messaging-app-socket.io" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </div>
      </div>

      <div className="last-project">
        <img className="project-image float-right w-full md:w-6/12" alt="weatherimg" src={Contact} />
        <div className="float-left">
          <h3 className="project-title">Contact App</h3>
          <div className="project-desc">
            <p className="text">
              This contact app was one of my first apps and it helped introduce me to react, more specifically react's hooks. Using useState I was able to
              create variables and objects and with useEffect I created a search function to allow the user to search throught their contacts by either their number or name

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