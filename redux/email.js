import * as ActionTypes from './ActionTypes';

export const email = (state = { email: "" }, action) => {

    switch (action.type) {
        case ActionTypes.ADD_EMAIL:
            return { ...state, email: action.payload };
        default:
            return state;
    }
}