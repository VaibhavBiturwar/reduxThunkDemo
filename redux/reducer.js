import {INC_COUNT, USERS} from './action';

const initialState = {
  count: 100,
  users: [],
};

export const myReducer = (state = initialState, action) => {
  //   console.log('Reducer: ', action.type, '  ', INC_COUNT, ' ', action.payload);
  switch (action.type) {
    case INC_COUNT:
      return {count: state.count + action.payload};

    case USERS:
      return {...state, users: action.payload};

    default:
      return state;
  }
};
