const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 22 }
            ],
            newPostText: 'it kama'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimuch' },
                { id: 2, name: 'Andew' }
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is you?" },
                { id: 1, message: "Yo" }
            ]
        }
    },
    _callSubscriber() {
        //Функция обсервер
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;//observer - наблюдатель
    },

    dispatch(action) { //{type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default store;
window.store = store;