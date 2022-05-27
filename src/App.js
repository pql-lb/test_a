import logo from './logo.svg';
import './css/index.scss';
import { connect } from 'react-redux';
import {gsap} from 'gsap';
import {Item} from './molecules/text-item';
import React, { useEffect, useState } from 'react';
import { ContactBtn } from './molecules/contact-btn';

function App({reducer}) {
  let [str, setStr] = useState([])
  let [over, setOver] = useState(false)
  const ref = React.useRef(null)

  useEffect(() => {
    let string = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    let arr = string.split(' ')
    setStr(arr);
  }, [])

  let tl = gsap.timeline({ paused: true })
  return (
    <div className="hero" >
      <div className='hero__inner'>
      <div className="hero__text" ref={ref}>
        {str.map((item, i) => {
          return <Item i={i} str={str} item={item} tl={tl} />
        })}
      </div>
      <ContactBtn setOver={setOver} />
      </div>
    </div>
  );
}



const MapStateToProps = (state) => ({
  reducer: state.reducer
})
// const MapDispatchToProps = {}
export default connect(MapStateToProps)(App)
