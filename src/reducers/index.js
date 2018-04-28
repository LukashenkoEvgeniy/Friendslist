import friendlist from './friends';
import loading from './loading';
import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'

const reducers = combineReducers({
    friendlist,
    loading
    // routing: routeReducer
});

export default reducers