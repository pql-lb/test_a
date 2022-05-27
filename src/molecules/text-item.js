import React, { useEffect, useState } from 'react';

export const Item = ({item, tl, i, str}) => {
  let ref = React.useRef(null);
  useEffect(() => {
    tl.fromTo(ref.current, {opacity: 0, translateX: -20}, {opacity: 1, translateX: 0, duration: 0.5}, '<+=0.025')
    if (i === str.length-1) { console.log(tl); tl.restart(0); }
  }, [ref.current])
  return <div ref={ref} id={item}>{item} </div>
}