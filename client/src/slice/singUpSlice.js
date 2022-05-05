import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../config/axios';

export const signupUser = createAsyncThunk(
  'login/userLogin',
  async ({ email, password, userName, confirmPassword }, { rejectWithValue }) => {
    const data = {
      email,
      password,
      userName,
      confirmPassword,
    };
    try {
      await instance.post('/registration', data);
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  success: '',
  loading: null,
  error: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [signupUser.pending]: (state, action) => {
      state.success = '';
      state.loading = true;
      state.error = '';
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = 'Registration successful. Please Verify Your Email Address';
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.success = '';
      state.loading = false;
      state.error = payload.error;
    },
  },
});

export default loginSlice.reducer;
