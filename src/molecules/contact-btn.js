import React, { useEffect, useState } from 'react';
import {gsap} from 'gsap';

export const ContactBtn = ({ setOver }) => {
    const arrow = React.useRef(null)
    const circle = React.useRef(null)
    const handleMove = (e) => {
        let bounds = circle.current.getBoundingClientRect();
        let center = bounds.x + bounds.width / 2;
        let centerY = bounds.y + bounds.height / 2;
        let x = e.clientX;
        let y = e.clientY;

        if (x < center + 50 | x > center - 50) {
            gsap.to(circle.current, { x: x - center, scale: 1.2 })
        }
        if (y < centerY + 50 | y > centerY - 50) {
            let val = y - centerY;
            gsap.to(circle.current, { y: val, scale: 1.2 })
        }
    }
    const handleOver = () => {
        setOver(true)
    }
    const handleOut = () => {
        setOver(false)
        gsap.to(circle.current, { y: 0, x: 0, scale: 1 })
    }
    useEffect(() => {

    }, [])
    return (
        <div className="hero__contact"> <h2>Contact Now</h2> <div ref={circle} onMouseOver={handleOver} onMouseOut={handleOut} onMouseMove={handleMove} className="hero__circle"><img id="arrow" src="/" ref={arrow} /></div> </div>
    )
}