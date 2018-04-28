import PropTypes from 'prop-types';
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';
import Favorite from 'material-ui/svg-icons/action/favorite';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

export const FriendsList = ({addFriend, list}) => (
        <List>
            <Subheader>Recent chats</Subheader>

            {list.map(item => (
                <ListItem
                    key={item.id}
                    primaryText={item.name}
                    leftAvatar={<Avatar src={item.avatar}/>}
                    rightIcon={
                        <Favorite
                            color={blue500}
                            hoverColor={red500}
                        />
                    }
                />
            ))}

            {/*<button onClick={addFriend('Test')}>Add</button>*/}

        </List>
);