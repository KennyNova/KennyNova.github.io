import './styles/App.css';
import './styles/tailwind.css';
import { splitWordAnimation } from './module/split.js';
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Aboutme } from './components/Aboutme'

function App() {
  return (
    <div className="container">
      <div className="intro">
        <a className="button learn-more top-2/3 md:left-1/3 md:top-1/2" href="#learnMore">learn more</a>
        {splitWordAnimation('hello my name is navid', "and welcome to my portfolio")}
      </div>

      <svg className="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  ><path fill="#142129" fill-opacity="1" d="M0,224L80,229.3C160,235,320,245,480,224C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      
      <div id="learnMore" >

        <Aboutme />
       
        <svg className="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"  width="100vw"><path fill="#CAD2C5" fill-opacity="1" d="M0,320L80,272C160,224,320,128,480,128C640,128,800,224,960,250.7C1120,277,1280,235,1360,213.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
       
        <Projects />

        <svg className="wave3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path  fill="#053836" fill-opacity="1" d="M0,64L60,80C120,96,240,128,360,133.3C480,139,600,117,720,96C840,75,960,53,1080,74.7C1200,96,1320,160,1380,192L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

        <Contact />

      </div>
    </div>
  );
}

export default App;