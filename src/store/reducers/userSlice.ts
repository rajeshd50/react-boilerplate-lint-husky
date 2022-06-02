import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../models';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../store';

export interface UserState {
  userDetails: User | undefined;
  isLoggedIn: boolean;
  token: string | undefined;
}

const initialState: UserState = {
  userDetails: undefined,
  isLoggedIn: false,
  token: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<Omit<UserState, 'isLoggedIn'>>) => {
      state.userDetails = action.payload.userDetails;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    setLoggedOut: (state) => {
      state.userDetails = undefined;
      state.isLoggedIn = false;
      state.token = undefined;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserDetails: (state, action: PayloadAction<User>) => {
      state.userDetails = action.payload;
    },
  },
});
export const { setLoggedIn, setLoggedOut, setToken, setUserDetails } = userSlice.actions;

export const selectUserDetails = (state: RootState): User | undefined => state.user.userDetails;

export const selectAuthToken = (state: RootState): string | undefined => state.user.token;

export const selectIsUserLoggedIn = (state: RootState): boolean => state.user.isLoggedIn;

export default userSlice.reducer;
