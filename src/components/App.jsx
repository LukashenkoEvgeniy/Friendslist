import React, {Component} from 'react';
import './styles/index.scss';
import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers';
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FriendsListContainer} from "./friendsList/FriendsListContainer";
import {Router, Route, browserHistory} from 'react-router-3'
import {syncHistoryWithStore} from 'react-router-redux'
// import User from "./user/User";
import AsyncComponent from "./HOC/AsyncComponent";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);


function log(logMessage) {
    // возвращаем функцию декоратора
    return function (target, property, descriptor) {
        // сохраняем исходное значение, которое является методом (функцией)
        const originalMethod = descriptor.value;

        // заменяем реализацию метода
        descriptor.value = function(...args) {
            console.log('[LOG]', logMessage);

            // вызов исходного метода
            // `this` указываем на экземпляр
            return originalMethod.call(this, ...args);
        };

        return descriptor;
    }
}


//async hoc wrapper
const AsyncUser = AsyncComponent(() => import('./user/User'));

export default class App extends Component {

    @log('App render method')
    render() {
        history.listen(location => console.log(location.pathname));
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <Router history={history}>
                        <Route path="/" component={FriendsListContainer}/>
                        <Route path="/user/:id" component={AsyncUser}/>
                    </Router>
                </Provider>
            </MuiThemeProvider>
        );
    }
}



