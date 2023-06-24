import '../styles/tailwind.css';
import resume from '../images/resume.png'
import {useState} from 'react';

export const Aboutme = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const form = (e) => {
    e.preventDefault()
    setShowForm(!showForm)
  }

    return (


        <div className="about-me md:pr-8 md:pl-8">
          <h2 className="text-9xl md:text-9xl">about me</h2>
          {/* <a className="w-full border-2 md:w-4/5 float-right" >
          <img className="resume-image float-right w-full md:w-4/12" alt="resumeimg" src={resume} ></img>
          </a> */}


          <div className="cursor-pointer float-right relative group w-1/2 md:w-4/12">
            <img
              src={resume}
              alt="resume"
              className="resume-image "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {isHovered && (
              <a className="button absolute inset-0 flex items-center justify-center bg-gray-800  opacity-0 transition-opacity duration-300 group-hover:opacity-30 pointer-events-none" onClick={e => form(e)}>
              <div className="p-2 text-white text-center">
                Click to Request Resume
              </div>
            </a>
            )}
          </div>


          <p className="text about-desc">
              My name is Navid Madani. I am currently a CS student at Georgia State University. I've have always enjoyed learning
            about new technologies and implementing them into my day to day life. I aspire to become a Full Stack developer as I love
            working in both the frontend and backend. I am working everyday to achieve this goal by learning as much as I can and then
            using that knowledge to create apps.
          </p>
        </div>
    )
}