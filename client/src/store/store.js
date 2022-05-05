import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slice/singUpSlice';
import authentication from '../slice/authenticationSlice';
import login from '../slice/loginSlice';
import userReources from '../slice/adminSlice';

export const store = configureStore({
  reducer: {
    register: loginSlice,
    authentication,
    login,
    fetchUser: userReources,
  },
});
