import friendlist from './friends';
import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'

const reducers = combineReducers({
    friendlist,
    // routing: routeReducer
});

export default reducers