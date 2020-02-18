import { createSelector } from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users;
}

//Как использовать библиотеку reselector/ Берется примитивный селектор getUsersSelector,
//getUsersSelector возвращает users
//далее эти данные подсовываются в createSelector, как видно ниже
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);//фейковая филтрация
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}