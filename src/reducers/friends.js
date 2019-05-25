// @flow

import * as types from '../constants/ActionTypes';

const initialState = {
    friendsList: [],
};

export default function friends(state = initialState, action) {
    switch (action.type) {
        case types.ADD_FRIEND:
            return {
                ...state,
                friendsList: [...state.friendsList, action.person],
            };

            case types.ADD_FRIENDS_LISTS:
            return {
                friendsList: action.list
            };

        case types.DELETE_FRIEND:
            return {
                ...state,
                // friends: state.friends.filter(id => id !== action.id),
                friendsList: omit(state.friendsList, action.id)
            };

        default:
            return state;
    }
}