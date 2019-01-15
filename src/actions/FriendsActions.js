import * as types from '../constants/ActionTypes';
import {getFriendsListFromAPI} from "../api/friendsApi";

export function addFriend(person) {
    return {
        type: types.ADD_FRIEND,
        person
    };
}

export function addFriendsList(list) {
    return {
        type: types.ADD_FRIENDS_LISTS,
        list
    };
}

export function loadedFriendsList() {
    return {
        type: types.LOADED,
    };
}


export function deleteFriend(id) {
    return {
        type: types.DELETE_FRIEND,
        id
    };
}

//midleware
export const getFriendsListFromApi = () => dispatch =>  {
    getFriendsListFromAPI()
        .then((friendsList)=> {
             dispatch(addFriendsList(friendsList));
            dispatch(loadedFriendsList())
        });
};
