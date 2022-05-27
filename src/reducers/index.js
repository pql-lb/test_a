import {MENU_STATE} from '../actions/index';

export const reducer = (state = {menu_state: false}, action) => {
    switch (action.type) {
        case MENU_STATE:
            let newState = {...state, menu_state: action.payload}
            return newState;
        default:
            return state;
    }
}