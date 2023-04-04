/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, {
        title: action.payload.title,
        author: action.payload.author,
        genre: action.payload.genre,
        percentage: 0,
        chapter: 'Not opened yet',
      }];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      initialState.books = state.books.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;