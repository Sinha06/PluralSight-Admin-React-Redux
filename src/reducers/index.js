/*
  our rootReducer file
  Traditionally the rootReducer is called index.js.
  Inside, we're going to reference the function that comes from reduc called 'combineReducers'
  and we're also going to need to import our courseReducer that we just creates.

  Then we define our rootReducer, and we'll use tha combineReducer function. Inside of here, we define all of the reducers that
  we're wanting to combine for our application.


 */

import {combineReducers} from 'redux';
import courses from './courseReducers';
import authors from './authorReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  ajaxCallInProgress,
  courses,
  authors// shorthand property name for courses: courses
});

export default rootReducer;
