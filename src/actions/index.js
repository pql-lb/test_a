export const MENU_STATE = 'MENU_STATE';

export const menuState = (action) => {
    return {
        type: MENU_STATE,
        payload: action
    }
}