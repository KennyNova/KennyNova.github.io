import "./styles/App.css";
import "./styles/tailwind.css";
import { splitWordAnimation } from "./module/split.js";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Aboutme } from "./components/Aboutme";
import { useState, useEffect, useRef } from "react";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const temp = window.pageYOffset /(document.body.offsetHeight - window.innerHeight) *100 
      setScrollPercentage(
        temp
      );      
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLearnMoreClick = () => {
    const targetElement = targetRef.current;

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        // duration: '10'
      });

      targetElement.classList.add('scroll-animation');
      setTimeout(() => {
        targetElement.classList.remove('scroll-animation');
      }, 20000); // adjust this value to control the duration of the animation
    }
  };

  return (
    <div className="container">
      <div className="intro">
        <a
          className="button learn-more top-2/3 md:left-1/3 md:top-1/2"
          onClick={handleLearnMoreClick}
          href="#learnMore"
        >
          learn more
        </a>
        {splitWordAnimation(
          "hello my name is navid",
          "and welcome to my portfolio"
        )}
      </div>

      <div className="wave-container overflow-x-hidden">
      <svg
  style={{
    transform: `translateX(-${Math.min(scrollPercentage, 25)}%)`,
    transition: "transform 1s ease-out",
    display: "flex", // add display flex
  }}
  className="wave1"
  viewBox="0 0 1440 320" // update the viewBox width to fit both paths side by side
>
  <path
    fill="#142129"
    d="M0,224L80,229.3C160,235,320,245,480,224C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
  ></path>
</svg>

      </div>
    

      <div ref={targetRef}>
        <Aboutme />

        <svg
          style={{
            transition: "transform 1s ease-out",
            transform: `translateX(${-(Math.min(-scrollPercentage, 170)+70)}%) `,
          }}
          
          className="wave2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          
        >
          <path
            fill="#CAD2C5"
            fill-opacity="1"
            d="M0,320L80,272C160,224,320,128,480,128C640,128,800,224,960,250.7C1120,277,1280,235,1360,213.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

        <Projects />

        <svg
          style={{
            transition: "transform 1s ease-out",
            transform: `translateX(${-(Math.min(scrollPercentage, 90))+60}%) `,
          }}
          className="wave3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#053836"
            fill-opacity="1"
            d="M0,64L60,80C120,96,240,128,360,133.3C480,139,600,117,720,96C840,75,960,53,1080,74.7C1200,96,1320,160,1380,192L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>

        <Contact />
      </div>
    </div>
  );
}

export default App;
