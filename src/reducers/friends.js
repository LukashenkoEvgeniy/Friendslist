import * as types from '../constants/ActionTypes';

const initialState = {
    friendsList: [
        // {id:1, name:'Abraham Lincoln', avatar:"https://media.licdn.com/dms/image/C5603AQGGMVdZxnwSCA/profile-displayphoto-shrink_800_800/0?e=1528974000&v=beta&t=gEQfFxQxk094lHxC-Knrp-ugvO3E73GKNouvwgvvd20"} ,
        // {id:2, name:'George Washington',  avatar:"https://media.licdn.com/dms/image/C4E03AQHBFAgCcj6TqA/profile-displayphoto-shrink_800_800/0?e=1528974000&v=beta&t=w-_PuwaIGhvQt1-eT4ExVWjjUdXi4F8xUGlo71UJJQ0"},
        // {id:3, name:'Theodore Roosevelt', avatar:"https://media.licdn.com/dms/image/C5603AQGNQgNngANNXw/profile-displayphoto-shrink_800_800/0?e=1528974000&v=beta&t=QoiW3PsHz21l16FODyOc_2d81WLTeSSVtMgz7dMXcpk"},
        // {id:4, name:'Kerem Suer', avatar:"https://media.licdn.com/dms/image/C5603AQGYq6NO1OZDIg/profile-displayphoto-shrink_800_800/0?e=1528974000&v=beta&t=-_7V7xdd5TE5lTrtjoaos_V7MlvNAr0AMwIz54jEhxw"},
        // {id:5, name:'Raquel Parrado', avatar:"https://media.licdn.com/dms/image/C4E03AQHg07dpZI2ytA/profile-displayphoto-shrink_800_800/0?e=1528974000&v=beta&t=jUMsUPgIoubjcLimn5_msoe7NiQOnjfTg6pTHrH2vO8"}
        ],
    loaded: false
};

export default function friends(state = initialState, action) {
    switch (action.type) {
        case types.ADD_FRIEND:
            const newId = state.friendsList.length + 1;
            return {
                ...state,
                friendsList: [...state.friendsList, {id:newId, name:action.name, avatar: action.avatar}],
            };

        case types.DELETE_FRIEND:
            return {
                ...state,
                // friends: state.friends.filter(id => id !== action.id),
                friendsList: omit(state.friendsList, action.id)
            };

        case types.LOADED:
            return {
                ...state,
                loaded:true
            };
        default:
            return state;
    }
}