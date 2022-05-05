import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../config/axios';

export const userReources = createAsyncThunk(
  'user/fetchUser',
  async (params, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await instance.get('/user', {
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      if (error) {
        localStorage.removeItem('token');
        window.location.href = '/';
      }

      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: [],
  error: '',
};

export const adminSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: {
    [userReources.pending]: (state, { payload }) => {
      state.error = payload;
    },
    [userReources.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [userReources.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export default adminSlice.reducer;
