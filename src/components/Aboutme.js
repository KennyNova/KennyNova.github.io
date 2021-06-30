import '../styles/tailwind.css';
import profile from '../images/profile.jpg'

export const Aboutme = (props) => {

    return (
        <p className="float-left text-base md:text-3xl" {...props}>
            <img className="image float-left w-20 md:w-52" src={profile} alt="profile-img" />
            My name is Navid Madani. I am currently a CS student at Georgia State University. I've have always enjoyed learning
           about new technologies and implementing them into my day to day life. I aspire to become a Full Stack developer as I love
           working in both the frontend and backend. I am working everyday to achieve this goal by learning as much as I can and then
           using that knowledge to create apps.
        </p>
    )
}