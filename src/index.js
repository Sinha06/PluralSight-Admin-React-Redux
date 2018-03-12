/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; //webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {loadCourses} from "./actions/courseActions";
import {loadAuthors} from "./actions/authorActions";

//const store = configureStore({courses: ['abc', 'def']});
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')

);


/*
  babel-polyfill - There are set of features that babel can not transpile. So for those, we need to use a ployfill.

  render - with React.14, react-DOM was split off from react. So we have to pull that in anytime we're doing web development
            so that we have a render function that works in the browser.

  Router - we need the Router itself, which is the component that we end up placing here at the root of our application to handle our Routing
  browserHistory - Then we have to choose a way to hanndle history in react Router. browserHistory because it gives us nice clean URLs.

  Provider - React-Recux provide a special component call  Provider. Provider is is a hogher-order component
  that attaches our store to our React container components.

  So Router compinent is wrpped with Provider component.
  Provider take one parament called store.

  So, effectively the Provider component is wrapping our entire application so that it can be connectted to  our redux store

 */
