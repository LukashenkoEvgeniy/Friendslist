import PropTypes from 'prop-types';
import React from 'react';
import {FriendsListItem} from "./components/FriendsListItem";
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export const FriendsList = ({addFriend, list}) => (

            <List>
                <Subheader>Recent chats</Subheader>

                {list.map(item => (
                    <ListItem
                        primaryText={item.name}
                        leftAvatar={<Avatar src={item.avatar} />}
                        rightIcon={<CommunicationChatBubble />}
                    />
                ))}

            </List>
);