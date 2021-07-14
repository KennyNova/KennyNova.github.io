import '../styles/tailwind.css';

export const Construction = (props) => {

    return (
        <p className="text-base md:text-3xl" style={{  position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} {...props}>
            Currently under construction
        </p>
    )
}