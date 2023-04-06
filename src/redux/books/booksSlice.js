import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import { getBooksRequest } from '../request';

const initialState = {
  books: [],
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      return { ...state, books: [...state.books, newBook] };
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return { ...state, books: state.books.filter((book) => book.id !== bookId) };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBooksRequest.fulfilled, (state, action) => {
        const objArray = Object.entries(action.payload)
          .map(([id, value]) => value.map((item) => ({ id, ...item })))
          .reduce((acc, curr) => [...acc, ...curr], []);
        return ({
          ...state,
          books: objArray,
        });
      })
      .addCase(getBooksRequest.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
      }));
  },
});

export const { addBook, removeBook, setError } = booksSlice.actions;

export default booksSlice.reducer;
