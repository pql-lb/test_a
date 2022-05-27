import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { menuState } from '../actions';

const Toggle = ({ reducer }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        const {menu_state} = reducer;
        dispatch(menuState(!menu_state))
    }
    return (
        <button 
        onClick={handleClick}
        className="toggle">
            <div className='toggle__line'></div>
            <div className='toggle__line'></div>
            <div className='toggle__line'></div>
        </button>
    )
}

const MapStateToProps = (state) => ({
    reducer: state.reducer
})
// const MapDispatchToProps = {}
export default connect(MapStateToProps)(Toggle)