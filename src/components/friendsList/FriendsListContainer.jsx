import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux'
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {FriendsList} from './FriendsList'

export default class FriendsListContainer extends Component{

    render() {
        return (
            <FriendsList/>
        );
    }
}
