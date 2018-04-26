import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './store/reducers';
import './index.css';
import './assets/style/index.less'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './api/config';

const store = createStore(reducer, applyMiddleware(thunk));
// const store = createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension? window.devToolsExtension(): f=>f));

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
