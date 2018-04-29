import React from 'react'
import {connect} from 'react-redux';


const User = ({user}) => {
    return <p>{user.name}</p>
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.friendlist.friendsList.find(user => user.id === Number(ownProps.params.id))
    }
};

export default connect(mapStateToProps)(User)