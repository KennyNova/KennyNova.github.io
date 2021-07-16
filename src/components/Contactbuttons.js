import resume from '../other/Navid_M_Resume.docx.pdf';
import github from '../images/icons/github_icon.png';
import email from '../images/icons/email_icon.png';
import resumeIcon from '../images/icons/resume_icon.png'

export const Contactbuttons = () => {
    return (
        <div className="place-items-center">
            <a className="github-button text-center inline-block  mt-10 lg:m-auto w-72" href="https://github.com/KennyNova" target="_blank" rel="noopener noreferrer">
              <img className="contact-image githubimg float-left w-8 mr-0 " src={github} alt="github-icon" />
              GitHub
              <p className="subtext">(Click to visit)</p>
            </a>
            <a className="email-button text-center inline-block max-h-24 text-base mt-10 lg:m-auto w-72" onClick={() => { navigator.clipboard.writeText("NavidM4598@gmail.com") }}>
              <img className="contact-image float-left w-8 mr-5" src={email} alt="email-icon" />
              NavidM4598@gmail.com
              <p className="subtext">(Click to copy to clipboard)</p>
            </a>
            <a className="resume-button text-center inline-block mt-10 lg:m-auto w-72" href={resume} download>
              <img className="contact-image float-left w-6 mr-5" src={resumeIcon} alt="phone-icon" />
              Résumé
              <p className="subtext">(Click to download)</p>
            </a>
        </div>
    )
}