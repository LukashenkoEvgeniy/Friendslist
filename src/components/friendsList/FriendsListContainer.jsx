import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FriendsList} from './FriendsList'
import * as FriendsActions from '../../actions/FriendsActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getFriendsListFromApi} from "../../actions/FriendsActions";
import Loading from "../HOC/Loading";


const mapStateToProps = state => ({
    friendlist: state.friendlist
});

const FriendsListWithLoading = Loading(FriendsList);

@connect(mapStateToProps)
export default class FriendsListContainer extends Component {


    componentWillMount() {
        const {dispatch} = this.props;
        // console.log(this.props.match.params.user)
        dispatch(getFriendsListFromApi());
    }

    render() {

        const {friendlist: {friendsList}, dispatch} = this.props;
        const actions = bindActionCreators(FriendsActions, dispatch);

        return (
                <FriendsListWithLoading
                    addFriend={actions.addFriend}
                    list={friendsList}
                />
        );
    }
}
