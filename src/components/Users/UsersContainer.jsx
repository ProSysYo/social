import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Preloader from '../common/preloader/Preloader';
import Users from './Users';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

import {
    follow, 
    unfollow, 
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
} from '../../redux/users-reducer';

import { 
    getPageSize, 
    getTotalUsersCount, 
    getCurrentPage, 
    getUsers,
    getIsFetching,
    getFollowingInProgress    
} from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props;
        this.props.requestUsers(pageNumber, pageSize);    
    }

    render() {
        return (
            <> 
                {this.props.isFetching ? <Preloader /> : null}

                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}                    
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {        
        users: getUsers(state),//Селектор используется reselector
        pageSize: getPageSize(state),//Селектор
        totalUsersCount: getTotalUsersCount(state),//Селектор
        currentPage: getCurrentPage(state),//Селектор
        isFetching: getIsFetching(state),//Селектор
        followingInProgress: getFollowingInProgress(state)//Селектор
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, 
        unfollow, 
        setCurrentPage, 
        toggleFollowingProgress, 
        requestUsers})
)(UsersContainer);