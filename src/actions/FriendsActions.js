import * as types from '../constants/ActionTypes';
import {getFriendsListFromAPI} from "../api/friendsApi";

export function addFriend(name, avatar) {
    return {
        type: types.ADD_FRIEND,
        name,
        avatar
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
            friendsList.forEach((listItem)=>dispatch(addFriend(listItem.name, listItem.avatar)))
            dispatch(loadedFriendsList())
        });
};
