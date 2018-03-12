import initialState from "./initialState";
import * as types from '../actions/actionTypes';

function actionTypesEndsInSuccess(type) {
  return type.substring(type.length -8) === '_SUCCESS';
}

export default function ajaxActionReducer(
  state=initialState.numAjaxCallsInProgress, action
) {
  if(action.type === types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if ( action.type === types.AJAX_CALL_ERROR || actionTypesEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}
