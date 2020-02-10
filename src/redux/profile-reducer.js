import { usersAPI } from './../api/api';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 22 }
    ],
    newPostText: 'Hello! This is my new post!',
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,                
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        } 
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_STATUS : {
            return {

            }
        }
        default:
            return state;
    }
}

//ActiomCreators
export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({type: SET_STATUS, status})

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const getUserProfile= (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)       
            .then(data => {               
                dispatch(setUserProfile(data));
            });
    }
}

export default profileReducer;