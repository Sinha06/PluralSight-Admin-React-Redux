/*
* Whne creating a store, its useful to define an function that configure the store becuse we'll call this function at our application's entry point.
* This way, the store's configured when th app starts up.
* We import createStore from redux and rootReducer whihc we just created.
*
* The configureStore function should accept one parameter, which is initial state for your app.
* This is a good way to initialize your store with some state, especially when you are doing server-side rendering
*
* Inside this function, we are ging to retun a call to createStore, which we imported
* createStore will take two parameters,, the first of which is our rootReducer, and the second of which is is the initialState
* That all it needs to create a store.
*
* But while we are in here, let's add an optional piece of  middleware to enhance our store.
* Now to add middleware, we're hoing to need a function that comes with Redux called applyMiddleware.
* The third parameter for our store accepts the applyMiddleware function.
* and inside of applyMiddleware parenthesis we will specify all the middleware that we would like to
* utilize in our application.
*
* Now that middleware that we'd like to apply is reduxImmutableStateInvariant.
*
* checkout react Slingshot on Github for example of how to configure these other pieces of middleware.
*
* */


import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );

}
