import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        },
        sidebar: {

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);       
    }
}

export default store;
window.store = store;