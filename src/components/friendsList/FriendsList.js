
import PropTypes from 'prop-types';
import React from 'react';
import {FriendsListItem} from "./components/FriendsListItem";

export const FriendsList = ({addFriend, list}) => {

    let htmlArray = [];

    list.forEach((item) => {
        htmlArray.push(<FriendsListItem
            key={item.id}
            item={item}
        />)
    });
    return (
        <div>
            {htmlArray}
            <button onClick={() => addFriend("test")}>Add new</button>
        </div>

    );
};

