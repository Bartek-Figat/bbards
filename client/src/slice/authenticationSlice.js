import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../config/axios';

export const authenticationPage = createAsyncThunk(
  'auth/authToken',
  async (params, { rejectWithValue }) => {
    try {
      await instance.get(`/activate/${params.token}`);
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  status: null,
};

export const authentication = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authenticationPage.pending]: (state, { payload }) => {
      state.status = payload;
    },
    [authenticationPage.fulfilled]: (state, { payload }) => {
      state.status = 'Success';
    },
    [authenticationPage.rejected]: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export default authentication.reducer;
