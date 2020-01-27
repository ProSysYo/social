import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state from './redux/state';
import App from './App';
import { addPost, updateNewPostText, subscribe } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} 
        addPost={addPost}
        updateNewPostText={updateNewPostText}/>
    </BrowserRouter>, document.getElementById('root'));
}
renderEntireTree(state);

subscribe(renderEntireTree);


serviceWorker.unregister();
