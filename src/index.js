import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import reducer from './store/reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk));
// const store = createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension? window.devToolsExtension(): f=>f));

ReactDOM.render(<Provider store={store}><StaticRouter><App /></StaticRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
