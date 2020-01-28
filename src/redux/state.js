const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        //Функция обсервер /Патерн
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
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});            
            this._callSubscriber(this._state);
        }        
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => 
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store;
window.store = store;