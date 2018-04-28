import React, {Component} from 'react';
import {connect} from 'react-redux';


const mapStateToProps = state => ({
    loaded: state.loading.loaded
});

export default function Loading(WrappedComponent) {
    @connect(mapStateToProps)
    class WrapComponent extends Component {
        render() {
            const {loaded} = this.props;
            return (
                loaded ? <WrappedComponent {...this.props}/> : <p>Loading...</p>
            )
        }
    }
    return WrapComponent
};