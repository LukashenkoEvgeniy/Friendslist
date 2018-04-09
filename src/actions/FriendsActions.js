import * as types from '../constants/ActionTypes';

export function addFriend(name) {
    return {
        type: types.ADD_FRIEND,
        name
    };
}

export function deleteFriend(id) {
    return {
        type: types.DELETE_FRIEND,
        id
    };
}
