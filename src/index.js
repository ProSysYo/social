import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialApp from './App';

ReactDOM.render(<SocialApp />, document.getElementById('root'));

serviceWorker.unregister();
