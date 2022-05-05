import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../config/axios';

export const loginUser = createAsyncThunk(
  'login/userLogin',
  async ({ email, password, confirmPassword }, { rejectWithValue }) => {
    const response = {
      email,
      password,
      confirmPassword,
    };
    try {
      const { data } = await instance.post('/login', response);
      console.log(data);
      const { token } = data;
      return await token;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  success: null,
  loading: null,
  error: '',
  token: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [loginUser.pending]: (state, { payload }) => {
      state.success = false;
      state.loading = true;
      state.error = '';
      state.token = '';
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.token = payload;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.success = false;
      state.loading = false;
      state.error = payload.error;
      state.token = '';
    },
  },
});

export default loginSlice.reducer;
