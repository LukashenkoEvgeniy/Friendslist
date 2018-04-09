import React from 'react';
import PropTypes from 'prop-types';
import {FriendsListItemAvatar} from "./FriendsListItemAvatar";
import {FriendsListItemBody} from "./FriendsListItemBody";

export const FriendsListItem = ({item}) => {
    return (
        <div>
            <FriendsListItemAvatar/>
            <FriendsListItemBody name={item.name}/>
        </div>
    )
};