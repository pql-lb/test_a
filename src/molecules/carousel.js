import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Carousel = ({ }) => {
    const [start, setStart] = useState(0)
    const b = React.useRef(null);
    let len = 3;
    const slide = React.useRef(null);
    const size = React.useRef(null);
    const handleDragStart = (e) => {
        let x = e.clientX;
        setStart(x)
    }
    const handleDragMove = (e) => {}
    const handleDragEnd = (e) => {
        let x = e.clientX;
        let width = size.current.clientWidth;
        let diff = start - x;
        console.log(diff, width)
        if (diff < width / 3 && diff > -width / 3) {
            let val = (diff > 0) ? width / len + 10 : -width / len - 10
            console.log('fire', val)
            slide.current.scrollLeft += val;
        } else {
            let perc = diff / width * 100;
            let pxls = width / 100 * perc;
            slide.current.scrollLeft += pxls;
        }
    }
    useEffect(() => {
        let mb = Array.from(document.querySelectorAll('.carousel__mix-blend'))
        let b = Array.from(document.querySelectorAll('.carousel__mix-blend-b'))

        mb.map((item, i) => {
            console.log(b)
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: size.current,
                    start: '0% 50%',
                    scrub: 1,
                    end: '0% 0%'
                }
            })
            tl.fromTo(item, {y: 50}, {y:0, duration: 0.5})
            tl.fromTo(b[i], {height: 0}, {height: 45, duration: 0.5}, '<+=0.035')
            tl.fromTo(item, {x: 200}, {x: 0, duration: 1})
        })
    }, [])
    return (
        <div className='carousel'>
            <div
                ref={size} className='carousel__inner'>
                <div
                    className='carousel__slide'>
                    <div
                        ref={slide}
                        onDragStart={handleDragStart}
                        onDrag={handleDragMove}
                        onDragEnd={handleDragEnd}
                        className='carousel__slide-inner'>
                        <div className='carousel__slide-item'
                        >
                            <div className='carousel__mix-blend'>
                                <div className='carousel__mix-blend-t'>Text</div>
                                <div ref={b} className='carousel__mix-blend-b'>Text</div>
                            </div>
                            <div className="carousel__slide-item-img"></div>
                        </div>
                        <div className='carousel__slide-item'
                        >
                            <div className='carousel__mix-blend'>
                                <div className='carousel__mix-blend-t'>Text</div>
                                <div ref={b} className='carousel__mix-blend-b'>Text</div>
                            </div>
                            <div className="carousel__slide-item-img"></div>
                        </div>
                        <div className='carousel__slide-item'
                        >
                            <div className='carousel__mix-blend'>
                                <div className='carousel__mix-blend-t'>Text</div>
                                <div ref={b} className='carousel__mix-blend-b'>Text</div>
                            </div>
                            <div className="carousel__slide-item-img"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;