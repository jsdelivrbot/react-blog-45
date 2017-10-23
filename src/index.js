import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import App from './components/app';
import Blog from './components/posts_index'
import Dodo from './Dodo'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component={App} />
        <Route exact path='/' component={Blog} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
