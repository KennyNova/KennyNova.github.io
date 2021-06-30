import github from '../images/icons/github_icon.png';
import email from '../images/icons/email_icon.png';
import phone from '../images/icons/phone_icon.png';

export const Contactbuttons = () => {
    return (
        <div className="grid auto-cols-auto md:grid-cols-3 place-items-center">
            <a className="github-button inline-block m-auto w-72" href="https://github.com/KennyNova" target="_blank" rel="noopener noreferrer">
              <img className="contact-image githubimg float-left w-8 mr-0 " src={github} alt="github-icon" />
              GitHub
              <p className="subtext">(Click to visit)</p>
            </a>
            <a className="email-button inline-block max-h-24 text-base mt-10 md:m-auto  md:w-auto lg:w-96 " onClick={() => { navigator.clipboard.writeText("navidmadani4598@gmail.com") }}>
              <img className="contact-image float-left w-8 mr-5" src={email} alt="email-icon" />
              NavidMadani4598@gmail.com
              <p className="subtext">(Click to copy to clipboard)</p>
            </a>
            <a className="phone-button inline-block mt-10 md:m-auto w-72 " href="tel:4047045778">
              <img className="contact-image float-left w-8 mr-5" src={phone} alt="phone-icon" />
              404-704-5778
              <p className="subtext">(Click to call)</p>
            </a>
        </div>
    )
}