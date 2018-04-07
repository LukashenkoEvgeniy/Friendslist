import React, {Component} from 'react';
import './styles/index.scss';
import PropTypes from 'prop-types';
import { createStore } from 'redux'
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import FriendsListContainer from "./friendsList/FriendsListContainer";

export default class App extends Component{

    render() {
        return (
          <FriendsListContainer/>
        );
    }
}
