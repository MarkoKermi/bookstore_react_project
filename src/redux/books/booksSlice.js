import { createSlice } from '@reduxjs/toolkit';
import { postBooks, deleteBooks, fetchBooks } from './api';

const initialState = {
  bookstore: [],
  status: 'idle',
  error: null,
  createStatus: '',
  deleteStatus: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const keys = Object.keys(action.payload);
        const temparray = [];
        keys.forEach((key) => {
          temparray.push(Object.assign({ id: key }, ...action.payload[key]));
        });
        state.bookstore = [...temparray];
        state.status = 'loaded';
      }).addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: [...state.error, action.error.message],
      })).addCase(postBooks.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        createdStatus: action.payload,

      }))
      .addCase(deleteBooks.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        createdStatus: action.payload,

      }));
  },

});

export default booksSlice.reducer;
