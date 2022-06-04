import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Name = ({item, lateStart}) => {
    const ref = React.useRef(null)
    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                start: (!lateStart) ? '0% 100%' : '0% 60%',
                end: (!lateStart) ? '0% 80%' : '0% 0%',
                scrub: (lateStart) ? 1 : 0.2,
                onEnter: () => {tl.restart(0)}
            }
        })
        tl.fromTo(ref.current, {opacity: 0, skewX: 40}, {skewX: 0, opacity: 1})
    }, [ref])


    return (
    <div ref={ref} id="id">{item}</div>
    )
}

export default Name;