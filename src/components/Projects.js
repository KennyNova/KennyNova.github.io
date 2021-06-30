import '../styles/tailwind.css';
import weatherApp from '../images/projects/weatherapp.png'
import pokedex from '../images/projects/pokedex.png'
import contactapp from '../images/projects/contactapp.png'
import chatapp from '../images/projects/chatapp.png'

export const Projects = (props) => {
    return (
        <div className="all-projects grid grid-rows-2 grid-flow-col gap-4" {...props}>
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
    )
}