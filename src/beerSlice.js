// src/redux/beerSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBeers = createAsyncThunk('beers/fetchBeers', async (query = '') => {
  const response = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${query}`);
  return response.data;
});

const beerSlice = createSlice({
  name: 'beers',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBeers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBeers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBeers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default beerSlice.reducer;
