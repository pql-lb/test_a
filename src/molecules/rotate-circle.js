import { gsap } from 'gsap';
import React, { useEffect, useState } from 'react';
import { Item } from './text-item';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const RotateCircle = () => {
    let [str, setStr] = useState([])
    const container = React.useRef(null);
    const parent = React.useRef(null);
    const circle = React.useRef(null);
    useEffect(() => {
        let string = "Bws Digital - we're here to create high quality solutions"
        let arr = string.split(' ')
        setStr(arr);
    }, [])
    let tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
            trigger: parent.current,
            start: '0% 60%',
            end: '0% 0%',
            scrub: 1
        }
    })
    let tl2 = gsap.timeline({
        paused: true,
        scrollTrigger: {
            trigger: parent.current,
            start: '0% 60%',
            end: '0% 0%',
            scrub: 1
        }
    })
    tl2.fromTo(circle.current, {rotate: 45, x: 50}, {rotate:0, x:0, duration: 0.4})
    tl2.fromTo('.circle__rotate-in', {scale: 0}, {scale: 1, duration: 0.4}, '<+=0.2')
    tl2.fromTo(circle.current, {border: '1px solid yellow'}, {border: 'none', duration: 0.001},'>')
    tl2.fromTo(circle.current, {rotate: 0, scale:1}, {scale:7, rotate:-180, duration: 0.8})
    return (
        <div ref={parent} className="circle-section">
            <div ref={container} className='circle__inner'>
                <div className='circle__rotate-outer'>
                <div ref={circle} className='circle__rotate'>
                    <div className='circle__rotate-in'></div>
                </div>
                </div>
                <div className='circle__text'>
                    {str.map((item, i) => {
                        return <Item effect={'skew'} i={i} str={str} item={item} tl={tl} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default RotateCircle;