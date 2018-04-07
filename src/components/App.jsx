import React, {Component} from 'react';
import './styles/index.scss';
import PropTypes from 'prop-types';
import { createStore } from 'redux'
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

export default class App extends Component{

    render() {
        return (
            <div>
               <p>Test</p>

            </div>
        );
    }
}
