import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Name from './name';

const Contact = () => {
    const line = React.useRef(null);
    const contact = React.useRef(null);
    const circle = React.useRef(null);
    const [str, setStr] = useState([])
    useEffect(() => {
        gsap.fromTo(line.current, { scaleY: 0 }, {
            scaleY: 1,
            scrollTrigger: {
                trigger: contact.current,
                top: '0% 50%',
                end: '0% 5%',
                scrub: 1
            }
        })
        gsap.fromTo(circle.current, { y: -50 }, {
            y: 0,
            scrollTrigger: {
                trigger: contact.current,
                top: '0% 50%',
                end: '0% 5%',
                scrub: 1
            }
        })
        let string = 'BWS DIGITAL'
        let arr = string.split(' ')
        setStr(arr);
    }, [])
    return (
        <div ref={contact} className='contact'>
            <div className='contact__inner'>
                <h1 className='contact__header'>Get in touch today</h1>
                <div className='contact__arrow'>
                    <hr ref={line} />
                    <div ref={circle}></div>
                </div>
                <h1 className='contact__company'>
                    {str.map((item, i) => {
                        return <Name item={item} />
                    })}
                </h1>
            </div>
        </div>
    )
}

export default Contact;