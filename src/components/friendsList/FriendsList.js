import PropTypes from 'prop-types';
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Favorite from 'material-ui/svg-icons/action/favorite';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import {Link} from 'react-router-3'

export const FriendsList = ({addFriend, list}) => (
    <List>
        <Subheader>Recent chats</Subheader>

        {list.map(item => (
            <Link
                key={item.id}
                to={`/user/${ item.id }`}
            >
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
            </Link>
        ))}

        {/*<button onClick={addFriend('Test')}>Add</button>*/}

    </List>
);