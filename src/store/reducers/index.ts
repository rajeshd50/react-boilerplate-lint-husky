import { combineReducers, Reducer } from 'redux';

// eslint-disable-next-line import/no-cycle
import userSlice from './userSlice';

export default function makeRootReducer(): Reducer {
  return combineReducers({
    user: userSlice,
  });
}
