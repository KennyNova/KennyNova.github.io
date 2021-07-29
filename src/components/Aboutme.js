import '../styles/tailwind.css';
import resume from '../other/Navid_M_Resume.docx.pdf';

export const Aboutme = (props) => {

    return (
        <div className="about-me md:pr-8 md:pl-8">
          <h2 className="text-9xl md:text-9xl">about me</h2>
          <a className="button resume float-right" href={resume} target="_blank">resume</a>
          <p className="text about-desc">
              My name is Navid Madani. I am currently a CS student at Georgia State University. I've have always enjoyed learning
            about new technologies and implementing them into my day to day life. I aspire to become a Full Stack developer as I love
            working in both the frontend and backend. I am working everyday to achieve this goal by learning as much as I can and then
            using that knowledge to create apps.
          </p>
        </div>
    )
}