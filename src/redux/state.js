let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 22}
      ],
      newPostText: 'it kama'    
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dimuch'},
        {id: 2, name: 'Andew'}
      ],
      messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is you?"},
        {id: 1, message: "Yo"}
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber () {
    //Функция обсервер
  },
  addPost() {  
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newNext) {
    this._state.profilePage.newPostText = newNext;    
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;//observer - наблюдатель
  }
}

export default store;