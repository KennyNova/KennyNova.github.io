import { useState } from "react";
import { Transition } from "@headlessui/react";

function Projects() {
  const [isOpen, setIsOpen] = useState({});

  function toggleDescription(index) {
    setIsOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  const projectData = [
    {
      title: "React Weather App",
      desc:
        `I recently built a weather app using React, which was a great learning experience for me. My primary goal was to
        understand how to access and implement an API. After reading OpenWeather's WeatherAPI documentation, I used the
         'fetch' function to query and display weather data to the user. I then focused on enhancing the app's user interface
          by designing a card that displayed the current temperature, weather condition, and date. I added a feature that
           changed the temperature's color based on whether it was hot or cold and created different backgrounds for the
            app depending on the weather conditions, such as rain or snow. Overall, building the weather app allowed me
             to explore API integration and UI design, and I'm excited to create more applications in the future.
       `,
      liveLink: "https://react-weather-app-bay-six.vercel.app/",
      codeLink: "https://github.com/KennyNova/React-Weather-App",
    },
    {
      title: "NextJS Pokedex",
      desc:
        `In creating this Pokedex, I had the opportunity to work with NextJS and Tailwind for the first time. Using PokeAPI,
        I was able to retrieve the original 151 Pokemons' name, height, weight, and types. By looping through the requests,
         I gathered all the data I needed for each Pokemon. I used Tailwind to streamline my workflow and quickly design the
          Pokedex's layout, including the home page and each Pokemon's info page. NextJS taught me how to break down my code
           into smaller components and how to utilize its fetch method to efficiently access the API data. Additionally,
            I added a "caught" checkbox tracker that saves into the browser's cookies. This project allowed me to improve my
             API integration skills, enhance my design capabilities, and explore new technologies, leaving me excited to
              continue building innovative applications in the future.
       `,
      liveLink: "https://pokedex-ten-beta.vercel.app/",
      codeLink: "https://github.com/KennyNova/Pokedex",
    },
    {
        title: "Socket.io App",
        desc:
            `Developing this chat app was tough, but also really satisfying. I had to create my first REST API, which involved using Socket.io and
            Express. At first, I just focused on getting basic requests to work between the frontend and backend, like sending and saving
             messages. Once I had the hang of it, I built the more complex parts of the app, like connecting to chat rooms and storing messages
              in a database. Then, I created a simple user interface where users can choose a username and select which text channel they want
               to join. When they enter a channel, they're automatically connected with other users there, and all previous messages are loaded
                up. I also learned how to host the app in the cloud using a docker container, which was a new experience for me.
           `,
        codeLink: "https://github.com/KennyNova/messaging-app-socket.io",
    },
    {
        title: "Contact App",
        desc:
           ` This contact app was one of my first projects, and it served as a great introduction to React and its hooks. Using the useState hook,
           I was able to easily create variables and objects. With the useEffect hook, I developed a search function that allows users to easily
            search through their contacts by name or number. Overall, it was a simple yet effective way to get started with React and its powerful
             features.`,
        liveLink: "https://new-contact-app.vercel.app/",
        codeLink: "https://github.com/KennyNova/new-contact-app",
    },
  ];

  return (
    <div>
      {projectData.map((project, index) => (
        <div className="project" key={index}>
          <h3 className="project-title">{project.title}</h3>
          <div className="project-desc">
            <Transition
              show={isOpen[index]}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <p className="text">{project.desc}</p>
            </Transition>
            <button
              className="text-blue-500 mt-2 focus:outline-none"
              onClick={() => toggleDescription(index)}
            >
              {isOpen[index] ? "Close" : "Read More"}
            </button>
          </div>
          <div className="project-links pointer-events-auto">
            <a
              className="button live"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
            <a
              className="button source-code"
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}