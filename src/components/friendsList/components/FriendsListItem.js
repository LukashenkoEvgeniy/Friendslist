import React from 'react';
import PropTypes from 'prop-types';
import {FriendsListItemAvatar} from "./FriendsListItemAvatar";
import {FriendsListItemBody} from "./FriendsListItemBody";

export const FriendsListItem = props => {
    return (
        <div>
            <FriendsListItemAvatar/>
            <FriendsListItemBody/>
        </div>
    )
};