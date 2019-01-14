import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FriendsList} from './FriendsList'
import * as FriendsActions from '../../actions/FriendsActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getFriendsListFromApi} from "../../actions/FriendsActions";
import Loading from "../HOC/Loading";

import Worker from './../../workers/list.worker.js';


const mapStateToProps = state => ({
    friendlist: state.friendlist
});

const FriendsListWithLoading = Loading(FriendsList);

@connect(mapStateToProps)
export class FriendsListContainer extends Component {


    componentWillMount() {
        const {dispatch} = this.props;
        // console.log(this.props.match.params.user)
        dispatch(getFriendsListFromApi());
    }

    render() {

        const {friendlist: {friendsList}, dispatch} = this.props;
        const actions = bindActionCreators(FriendsActions, dispatch);

        let worker = new Worker();
        worker.postMessage({ a: 1 });
        worker.onmessage = function (event) {
            console.log('onmessage', event)
        };
        worker.addEventListener("message", function (event) {
            console.log('message', event)

        });

        return (
                <FriendsListWithLoading
                    addFriend={actions.addFriend}
                    list={friendsList}
                />
        );
    }
}
