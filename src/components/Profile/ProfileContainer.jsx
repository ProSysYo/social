import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});



export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter
)(ProfileContainer);