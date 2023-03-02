import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LIwynBVImvIPWv4fs65F/books';

const initialState = {
  bookstore: [],
  status: 'idle',
  error: null,
  createStatus: '',
  deleteStatus: '',
};
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const postBooks = createAsyncThunk('books/postBooks', async (initialbooks) => {
  try {
    const response = await axios.post(BASE_URL, initialbooks);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (bookid) => {
  try {
    const response = await axios.delete(BASE_URL + bookid);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducer(builder) {
    builder.addBook(fetchBooks.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const keys = Object.keys(action.payload);
        const temparray = [];
        keys.forEach((key) => {
          temparray.push(Object.assign({ id: key }, ...action.payload[key]));
        });
        return {
          ...state,
          bookstore: [...temparray],
          status: 'loaded',
        };
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
