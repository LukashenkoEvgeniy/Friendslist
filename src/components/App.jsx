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
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
    render() {
        // history.listen(location => console.log(location.pathname))
        return (
            <Provider store={store}>
                <Router history={history}>
                    <MuiThemeProvider>
                        <Route path="/" component={FriendsListContainer}/>
                    </MuiThemeProvider>
                </Router>
            </Provider>

        );
    }
}
