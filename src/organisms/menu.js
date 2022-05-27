import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {gsap} from 'gsap';

const Menu = ({ reducer }) => {
    const { menu_state } = reducer;
    const menu = React.createRef();
    useEffect(() => {
        let tl = gsap.timeline({paused: true})
        tl.fromTo(menu.current, {display: 'none'}, {display: 'block'})
        tl.fromTo(menu.current, {x:-100}, {x:0, duration: 0.5})
        if (menu_state) {
            tl.restart(0)
        } else {
            tl.reverse(0)
        }
    }, [menu_state])
    return (
        <div>
            {/* {menu_state && */}
                <div
                ref={menu}
                >menu</div>
            {/* } */}
        </div>
    )
}

const MapStateToProps = (state) => ({
    reducer: state.reducer
})
// const MapDispatchToProps = {}
export default connect(MapStateToProps)(Menu)