import friendlist from './friends';
import loading from './loading';
import { combineReducers } from 'redux'
import { routerReducer  } from 'react-router-redux'

const reducers = combineReducers({
    friendlist,
    loading,
    routing: routerReducer
});

export default reducers