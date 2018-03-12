import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    /* case types.CREATE_COURSE:
         /!*state.push(action.course);
         return state;*!/

         /!*
         * instead of switch or if-else, try creating a lookup table..
         *
         * spread operator: spread the array, so effectively what we see here is representing
         * our existing array and then exploding it out as though
         * I had taken all the values in it and defined them here inline.
         * So this ends up retunrming a new instance of state aarray.
         *
         * Then i can use Object.assign to create a deep copy of the course that's passed in.
         *
         * This was, these two values together end up returning a brand-new state that contains the new course that
         * contains the new brand new course which someone has just passed in via the action.
         *
         * *!/
         return [...state,
           Object.assign({}, action.course)
         ];*/
    case types.LOAD_AUTHOR_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
