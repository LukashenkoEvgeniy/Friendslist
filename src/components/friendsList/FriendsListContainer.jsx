import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FriendsList} from './FriendsList'
import * as FriendsActions from '../../actions/FriendsActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getFriendsListFromApi} from "../../actions/FriendsActions";

@connect(state => ({
    friendlist: state.friendlist
}))
export default class FriendsListContainer extends Component{



    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(getFriendsListFromApi());
    }

    render() {

        const { friendlist: { friendsList }, dispatch } = this.props;
        const actions = bindActionCreators(FriendsActions, dispatch);

        return (
            <FriendsList addFriend={actions.addFriend} list={friendsList}/>
        );
    }
}
