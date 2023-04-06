import { v4 as uuidv4 } from 'uuid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/muIlT6qCeFLFsj2Wrw0e/books/';
let newBook = {
  item_id: '',
  title: '',
  author: '',
  category: '',
};
const initialState = {
  books: [],
  error: null,
};

const createRequestThunk = (type) => createAsyncThunk(type, async () => {
  try {
    let resp;
    if (type === 'books/getBooksRequest') {
      resp = await axios.get(url);
    } else if (type === 'books/addBookRequest') {
      resp = await axios.post(url, JSON.stringify(newBook), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else if (type === 'books/removeBookRequest') {
      resp = await axios.delete(`${url}${newBook.item_id}`);
    }
    return resp.data;
  } catch (err) {
    return err.message;
  }
});

export const getBooksRequest = createRequestThunk('books/getBooksRequest');
export const addBookRequest = createRequestThunk('books/addBookRequest');
export const removeBookRequest = createRequestThunk('books/removeBookRequest');

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      newBook = {
        item_id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      return { ...state, books: [...state.books, newBook] };
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      newBook.item_id = bookId;
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

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
