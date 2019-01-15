import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FriendsList} from './FriendsList'
import * as FriendsActions from '../../actions/FriendsActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getFriendsListFromApi} from "../../actions/FriendsActions";
import Loading from "../HOC/Loading";
import {WorkerService} from "../../workers/WorkerServise";


const mapStateToProps = state => ({
    friendlist: state.friendlist
});

const FriendsListWithLoading = Loading(FriendsList);

@connect(mapStateToProps)
export class FriendsListContainer extends Component {

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(getFriendsListFromApi());
        WorkerService.listWorker.addEventListener("message", function ({data}) {
            console.log('componentWillMount', data.list)
        });
    }

    render() {

        const {friendlist: {friendsList}, dispatch} = this.props;
        const actions = bindActionCreators(FriendsActions, dispatch);
        WorkerService.listWorker.postMessage({ list: friendsList });

        return (
                <FriendsListWithLoading
                    addFriend={actions.addFriend}
                    list={friendsList}
                />
        );
    }
}
