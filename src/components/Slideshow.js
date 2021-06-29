import '../styles/stars.css'
import boat from '../images/slideshow/boat.jpg'
import duck from '../images/slideshow/duck.jpg'
import flowers from '../images/slideshow/flowers.jpg'
import garden from '../images/slideshow/garden.jpg'
import statue from '../images/slideshow/statue.jpg'
import vanny from '../images/slideshow/vanny.jpg'
import vannyprofile from '../images/slideshow/vannyprofile.png'
import wheat from '../images/slideshow/wheat.jpg'

export const Slideshow = (props) => {
    const allImages = [{boat}, {duck}, {flowers}, {garden}, {statue}, {vanny}, {vannyprofile}, {wheat}]




    const images = () => {
        
        return (
            allImages.map(picture => {
                <img src={picture}></img>
            })
        )
    }

    return (
        <div className="slideshow-wrapper">
            {images}
        </div>
    )
}