import '../styles/slideshow.css'
import React, { useState } from 'react';
import boat from '../images/slideshow/boat.jpg'
import duck from '../images/slideshow/duck.jpg'
import flowers from '../images/slideshow/flowers.jpg'
import garden from '../images/slideshow/garden.jpg'
import statue from '../images/slideshow/statue.jpg'
import vanny from '../images/slideshow/vanny.jpg'
import vannyprofile from '../images/slideshow/vannyprofile.png'
import wheat from '../images/slideshow/wheat.jpg'

export const Slideshow = (props) => {
    const allImages = [boat, duck, flowers, garden, statue, vanny, vannyprofile, wheat]
    var [index, setIndex] = useState(0)

    function changeImage(direction) {
        if (direction === 'right') setIndex(index++)
        if (direction === 'left') setIndex(index--)
        if (index > 7) setIndex(0)
        if (index < 0) setIndex(7)
        console.log(direction)
        console.log(index + allImages[index] + direction)
    }

    function slideshow() {
        return (
            <img key={index} src={allImages[index]}></img>
        )
    }

    return (
        <div className="slideshow-wrapper">
            <a className="button float-left" onClick={(e => {changeImage("left")})}>left</a>
            {slideshow()}
            <a className="button float-right" onClick={(e => {changeImage('right')})}>right</a>
        </div>
    )
}