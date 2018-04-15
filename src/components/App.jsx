import React, {Component} from 'react';
import './styles/index.scss';
import PropTypes from 'prop-types';
import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers';
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FriendsListContainer from "./friendsList/FriendsListContainer";


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default class App extends Component {

    render() {

        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <FriendsListContainer/>
                </MuiThemeProvider>
            </Provider>
        );
    }
}
