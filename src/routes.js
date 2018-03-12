import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Homepage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from "./components/course/CousesPage";
import ManageCoursePage from "./components/course/ManageCoursePage";

/*
* Route and IndexRoute are pulled from react-router. IndexRoute is what we will use when there us just a root path that we want to expose.
* IndexRoute is what we will use when there us just a root pathe that we want to expose.
* So IndexrRoute here will reference our HomePagem whihch is effectively saying if somenody just goes to /, we will load the homepage. Otherwise, if the path is /about, then we will end up loading our AboutPage instead.
*
* Then all components were wrapped under Route component, which comes with React Router. And of course, I've also reference our App component,
* which will always be loaded. By placing it here at the top, we're saying always load the App component and then nest these other items, pass them as children based on our routing.
*
* So if we have a URL that is just a /HomePage, then HomePage will be passed as a child to our App component and will end up composed in App.js
* Sp for anothe eample, if I go to /about, the App.js will end up getting our AboutPage component right here because it will be passed as a child by React Router.
*
*
* */

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="courses" component={CoursesPage}/>
    <Route path="course" component={ManageCoursePage}/>
    <Route path="course/:id" component={ManageCoursePage}/>
  </Route>
);
