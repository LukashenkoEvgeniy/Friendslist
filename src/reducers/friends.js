import * as types from '../constants/ActionTypes';

const initialState = {
    friendsList: [ {id:1, name:'Abraham Lincoln'} ,{id:2, name:'George Washington'},{id:3, name:'Theodore Roosevelt'} ],
};

export default function friends(state = initialState, action) {
    switch (action.type) {

        case types.ADD_FRIEND:
            const newId = state.friendsList.length + 1;
            return {
                friendsList: [...state.friendsList, {id:newId, name:action.name}]
            };

        case types.DELETE_FRIEND:
            return {
                ...state,
                friends: state.friends.filter(id => id !== action.id),
                friendsList: omit(state.friendsList, action.id)
            }

        default:
            return state;
    }
}