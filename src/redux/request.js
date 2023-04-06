import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/muIlT6qCeFLFsj2Wrw0e/books/';

export const createRequestThunk = (type, url, method, body) => createAsyncThunk(type, async () => {
  try {
    const resp = await axios[method](url, body);
    return resp.data;
  } catch (err) {
    return err.message;
  }
});

export const getBooksRequest = createRequestThunk('books/getBooksRequest', url, 'get');
