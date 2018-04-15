import * as types from '../constants/ActionTypes';

export function addFriend(name, avatar) {
    return {
        type: types.ADD_FRIEND,
        name,
        avatar
    };
}



export function deleteFriend(id) {
    return {
        type: types.DELETE_FRIEND,
        id
    };
}


export const getFriendsListFromApi = () => dispatch =>  {
    setTimeout(() => {
        console.log('getFriendsListFromApi')
        dispatch(addFriend("From server", "https://media.licdn.com/dms/image/C4E03AQGdgSxouy_zfQ/profile-displayphoto-shrink_800_800/0?e=1528974000&v=beta&t=IJeYGyuXJ_h9KlOBQfBd0Vc7mrz6FJy09-LusDgo79E"))
    }, 2000)
}
