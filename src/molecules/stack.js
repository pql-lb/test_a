import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Name from './name';

gsap.registerPlugin(ScrollTrigger);
const Stack = () => {
    const ref = React.useRef(null);
    const [str, setStr] = useState([])
    useEffect(() => {
        let string = 'Our Stack'
        let arr = string.split(' ')
        setStr(arr);

        gsap.fromTo(ref.current, {width: 0}, {
            width: '100%', 
            scrollTrigger: {
                trigger: ref.current,
                start: '0% 80%',
                end: '0% 25%',
                scrub: 1
            }
        })
    }, [])
    return (
        <div className="stack">
            <div className='stack__inner'>
                <div className='stack__header'>
                    <h2 ref={ref}>
                    {str.map((item, i) => {
                        return <Name lateStart={true} item={item} />
                    })}
                    </h2>
                    <h3>La Boucle is a consulting agency specializing in the definition of
                        digital strategies, the framing and management of projects. We support our clients
                        in a totally tailor-made way on every aspect of their digital project.
                    </h3>
                </div>
                <div className='stack__table'>
                    <div class="stack__item">
                        <div><div className="inner">JAM</div></div>
                        <div>
                            <h3>JAM Stack</h3>
                            <h4>Lorem ipsum is the standard</h4>
                        </div>
                    </div>
                    <div class="stack__item">
                        <div><div className="inner">JAM</div></div>
                        <div>
                            <h3>JAM Stack</h3>
                            <h4>Lorem ipsum is the standard</h4>
                        </div>
                    </div>
                    <div class="stack__item">
                        <div><div className="inner">JAM</div></div>
                        <div>
                            <h3>JAM Stack</h3>
                            <h4>Lorem ipsum is the standard</h4>
                        </div>
                    </div>
                    <div class="stack__item">
                        <div><div className="inner">JAM</div></div>
                        <div>
                            <h3>JAM Stack</h3>
                            <h4>Lorem ipsum is the standard</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Stack;