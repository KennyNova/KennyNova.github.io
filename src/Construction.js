import './styles/tailwind.css';
import { Contactbuttons } from './components/Contactbuttons.js';

export const Construction = (props) => {

    return (
        <div>
            <p className="text-base md:text-3xl" style={{  position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} {...props}>
                Currently under construction
            </p>
            <Contactbuttons />
        </div>

    )
}