// src/features/alertSlice.js
import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    showAlert: false,
  },
  reducers: {
    showAlert: (state) => {
      state.showAlert = true;
    },
    hideAlert: (state) => {
      state.showAlert = false;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
