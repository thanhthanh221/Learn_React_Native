import {SET_USER_NAME, SET_USER_AGE} from './actions';

const initalState = {
  name: '',
  age: 0,
};
function userReducer(state = initalState, action) {
  switch (action.type) {
    case SET_USER_NAME: {
      return {...state, name: action.payload};
    }
    case SET_USER_AGE: {
      return {...state, age: action.payload};
    }
    default:
      return state;
  }
}
export default userReducer;
