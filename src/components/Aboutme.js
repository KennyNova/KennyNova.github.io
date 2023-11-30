import '../styles/tailwind.css';
import EmailButton from './EmailButton';

export const Aboutme = (props) => {

    return (
        <div className="about-me md:pr-8 md:pl-8 ">
          <h2 className="text-9xl md:text-9xl text-center capitalize mb-11 pointer-events-none">about me</h2>
          {/* <a className="button resume float-right" href="https://docs.google.com/document/d/12gK4zaAYeMd1x50HuJNvBcyTzNwWNDXq/edit?usp=sharing&ouid=111832137089279409929&rtpof=true&sd=true" rel="noreferrer"
           target="_blank">resume</a> */}
           <EmailButton className="button resume float-right"/>
          <p className="text about-desc pointer-events-none">
          Hey there,<br></br><br></br>

I'm Navid Madani and I've always been fascinated by new technologies and how they can be used in our daily lives. That's why I'm studying CS - I want to turn my interest into a career.
<br></br>
<br></br>
Specifically, I'm interested in becoming a Full Stack Developer. I love working on both the frontend and backend of web applications, and I find it incredibly satisfying to see a project come to life. To achieve my goal, I'm constantly learning as much as I can and experimenting with new ideas.
<br></br>
<br></br>
Ultimately, I want to use my knowledge and skills to create innovative applications that solve real-world problems.
          </p>
        </div>
    )
}