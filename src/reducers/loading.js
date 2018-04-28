import * as types from '../constants/ActionTypes';

const initialState = {
    loaded: false
};

export default function loading(state = initialState, action) {
    switch (action.type) {
        case types.LOADED:
            return {
                loaded: true
            };

        case types.START_LOADING:
            return {
                ...state,
                // friends: state.friends.filter(id => id !== action.id),
                friendsList: omit(state.friendsList, action.id)
            };

        default:
            return state;
    }
}