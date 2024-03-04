import { createSlice } from '@reduxjs/toolkit';
import { signup, login, current, logout } from './auth-operations';
import { pending, rejected } from 'shared/redux';

const initialState = {
  user: {},
  token: localStorage.getItem('token') ?? '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, pending)
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signup.rejected, rejected)
      .addCase(login.pending, pending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
        localStorage.setItem('token', payload.token);
      })
      .addCase(login.rejected, rejected)
      .addCase(current.pending, pending)
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = localStorage.getItem('token');
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(current.rejected, state => {
        state.isLoading = false;
        state.token = '';
      })
      .addCase(logout.pending, pending)
      .addCase(logout.fulfilled, state => {
        state.isLogin = false;
        state.isLoading = false;
        state.token = '';
        state.user = {};
        localStorage.removeItem('token');
      })
      .addCase(logout.rejected, rejected);
  },
});

export default authSlice.reducer;
