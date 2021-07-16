// import '../styles/tailwind.css';

// export const Projects = (props) => {
//     return (
//         <div className="all-projects grid grid-rows-1 grid-cols-4 gap-4" {...props}>
//               <div className="project ">
//                 <a href="https://github.com/KennyNova/React-Weather-App" target="_blank" rel="noopener noreferrer"> 
//                 <h1 className="project-title border-b-4 border-blue-400">React Weather App</h1>
//                 <div className="project-desc">
//                   <p className="m-5 leading-loose">
//                     I created this weather app using react. I went into creating this app with the intention of learning how to access and
//                     implement an api. I learned how to use fetch, to pull information from the api, and learned a lot by styling 
//                     the frontend. I was then able to use this knowledge in other apps.
//                   </p>
//                 </div>
//                 </a>
//               </div>
//               <div className="project">
//                 <a href="https://github.com/KennyNova/Pokedex" target="_blank" rel="noopener noreferrer"> 
//                 <h1 className="project-title border-b-4 border-red-600">NextJS Pokedex</h1>
//                 <div className="project-desc">
//                   <p className="m-5 leading-loose">
//                   When creating this Pokedex it was the first time I had ever used NextJS and Tailwind. Tailwind
//                  made styling the frontend much easier and made my workflow much more simpler. I learned how to break down my
//                  code into components and how to use NextJS's way to fetch data from an api.
//                   </p>
//                 </div>
//                 </a>
//               </div>
//               <div className="project">
//                 <a href="https://github.com/KennyNova/messaging-app-socket.io" target="_blank" rel="noopener noreferrer">
//                   <h1 className="project-title border-b-4 border-yellow-300">Socket.io Messaging App</h1>
//                   <div className="project-desc">
//                     <p className="m-5 leading-loose">
//                       Creating this chat app was a difficult but very rewarding task. I have learned so much from using Socket.io.
//                       I had also learned how to create my own postgres database and how to connect it to my app to store users and messages.
//                     </p>
//                   </div>
//                 </a>
//               </div>
//               <div className="project">
//                 <a href="https://github.com/KennyNova/new-contact-app" target="_blank" rel="noopener noreferrer">
//                   <h1 className="project-title border-b-4 border-pink-500">Contact App</h1>
//                   <div className="project-desc">
//                     <p className="m-5 leading-loose">
//                       This contact app was one of my first apps and it helped introduce me to react. I learned about useState and useEffect
//                       which are very helpful hooks when creating an app. I also learned how to read and write cookies to save the users contacts.
//                     </p>
//                   </div>
//                 </a>
//               </div>
//         </div>
//     )
// }

import '../styles/tailwind.css';

export const Projects = (props) => {
    return (
        <div className="all-projects " {...props}>
              <div className="project weather-app ">
                <a href="https://github.com/KennyNova/React-Weather-App" target="_blank" rel="noopener noreferrer"> 
                <h1 className="project-title border-b-4 border-blue-400">React Weather App</h1>
                <div className="project-desc">
                  <p className="m-5 leading-loose">
                    I created this weather app using react. I went into creating this app with the intention of learning how to access and
                    implement an api. I learned how to use fetch, to pull information from the api, and learned a lot by styling 
                    the frontend. I was then able to use this knowledge in other apps.
                  </p>
                </div>
                </a>
              </div>
              <div className="project pokedex">
                <a href="https://github.com/KennyNova/Pokedex" target="_blank" rel="noopener noreferrer"> 
                <h1 className="project-title border-b-4 border-red-600">NextJS Pokedex</h1>
                <div className="project-desc">
                  <p className="m-5 leading-loose">
                  When creating this Pokedex it was the first time I had ever used NextJS and Tailwind. Tailwind
                 made styling the frontend much easier and made my workflow much more simpler. I learned how to break down my
                 code into components and how to use NextJS's way to fetch data from an api.
                  </p>
                </div>
                </a>
              </div>
              <div className="project messaging-app">
                <a href="https://github.com/KennyNova/messaging-app-socket.io" target="_blank" rel="noopener noreferrer">
                  <h1 className="project-title border-b-4 border-yellow-300">Socket.io Messaging App</h1>
                  <div className="project-desc">
                    <p className="m-5 leading-loose">
                      Creating this chat app was a difficult but very rewarding task. I have learned so much from using Socket.io.
                      I had also learned how to create my own postgres database and how to connect it to my app to store users and messages.
                    </p>
                  </div>
                </a>
              </div>
              <div className="project contact-app">
                <a href="https://github.com/KennyNova/new-contact-app" target="_blank" rel="noopener noreferrer">
                  <h1 className="project-title border-b-4 border-pink-500">Contact App</h1>
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