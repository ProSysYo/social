import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
}
renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

serviceWorker.unregister();
