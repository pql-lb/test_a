import logo from './logo.svg';
import './css/index.scss';
import { connect } from 'react-redux';
import {gsap} from 'gsap';
import {Item} from './molecules/text-item';
import React, { useEffect, useState } from 'react';
import { ContactBtn } from './molecules/contact-btn';
import RotateCircle from './molecules/rotate-circle';
import Carousel from './molecules/carousel';
import Contact from './molecules/contact';
import { Canvas, glsl } from 'glsl-canvas-js';
import frag from './frag';
import Stack from './molecules/stack';

function App({reducer}) {
  let [str, setStr] = useState([])
  let [over, setOver] = useState(false)
  const canvas = React.useRef(null)
  const ref = React.useRef(null)

  useEffect(() => {
    if (canvas.current) {
    let gls = new Canvas(canvas.current);
    // gls.load(frag)
    console.log(gls)
    }

    // let string = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    // let arr = string.split(' ')
    // setStr(arr);
  }, [canvas])

  let tl = gsap.timeline({ paused: true })
  return (
    <>
    <div 
    style={{width: 500, height: 500}}
    ref={canvas}></div>
    {/* <div className="hero" >
      <div className='hero__inner'>
      <div className="hero__text" ref={ref}>
        {str.map((item, i) => {
          return <Item effect={'opacity'} i={i} str={str} item={item} tl={tl} />
        })}
      </div>
      <ContactBtn setOver={setOver} />
      </div>
    </div>
    <RotateCircle />
    <Carousel />
    <Stack />
    <Contact />
    <div className='footer'></div> */}
    </>
  );
}



const MapStateToProps = (state) => ({
  reducer: state.reducer
})
// const MapDispatchToProps = {}
export default connect(MapStateToProps)(App)
