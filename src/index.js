import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux-promise';
// import reducers from './reducers';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
