let state = {
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
}

let renderEntireTree = () => {
  //Функция обсервер
}

export const addPost = () => {  
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  
  renderEntireTree(state);
}

export const updateNewPostText = (newNext) => {
  state.profilePage.newPostText = newNext;
  
  renderEntireTree(state);
}

export const subscribe = (observer) => {
  renderEntireTree = observer;//observer - наблюдатель
}

export default state;