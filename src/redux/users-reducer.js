const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // { id: 1, followed: false, fullName: 'Dmitry', status: 'I am Ok!', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, followed: true, fullName: 'Maxim', status: 'I love Liana', location: { city: 'Yola', country: 'Mari' } },
        // { id: 3, followed: false, fullName: 'Liana', status: 'I love Maxim', location: { city: 'Yola', country: 'Mari' } }
    ]
};

const udersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { 
                ...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return { 
                ...state, 
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users ] }
        }
        default:
            return state;
    }
}
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUersAC = (users) => ({type: SET_USERS, users})

export default udersReducer;