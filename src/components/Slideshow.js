import '../styles/slideshow.css'
import React, { useEffect, useState } from 'react';
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
    var [prevIndex, setPrevIndex] = useState(7)
    const prevJsx = <img className="fade-out" key={prevIndex} src={allImages[prevIndex]}></img>
    const jsx = <img className="fade-in" key={index} src={allImages[index]}></img>

    useEffect(() => {
        if (index > 7) setIndex(0)
        if (index < 0) setIndex(7)
    }, [index])

    return (
        <div className="main-div" {...props}>
            <a className="button left text-7xl" onClick={() => { setPrevIndex(index); setIndex(index - 1) }}>&lt;</a>
            <div className="slideshow-wrapper">
                {prevJsx}
                {jsx}
            </div>
            <a className="button right text-7xl" onClick={() => { setPrevIndex(index); setIndex(index + 1)}}>&gt;</a>
        </div>
    )
}