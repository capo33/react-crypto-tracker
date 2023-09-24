import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import coinServices from "./coinServices";
import { ICoinState } from "../../interfaces/CoinInterface";

const initialState: ICoinState = {
  coins: [],
  coin: null,
  trendingCoins: [],
  marketChart: [
    {
      price: [],
      timestamp: [],
    },
  ],
  isError: false,
  isLoading: false,
  message: null,
};

// Get All Coins
export const getCoins = createAsyncThunk(
  "coins/getCoins",
  async (currency: string, thunkAPI) => {
    try {
      const response = await coinServices.getCoins(currency);

      return response;
    } catch (error: unknown | any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

// Get Coin By Id
export const getCoinById = createAsyncThunk(
  "coins/getCoinById",
  async (id: string, thunkAPI) => {
    try {
      const response = await coinServices.getCoinById(id);
      return response;
    } catch (error: unknown | any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const getCoinMarketChart = createAsyncThunk(
  "coins/getCoinMarketChart",
  async (id: string, thunkAPI) => {
    try {
      const response = await coinServices.getCoinMarketChart(id);

      return response;
    } catch (error: unknown | any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Coins
    builder.addCase(getCoins.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCoins.fulfilled, (state, action) => {
      state.isLoading = false;
      state.coins = action.payload;
    });
    builder.addCase(getCoins.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload as string;
    });

    // Get Coin By Id
    builder.addCase(getCoinById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCoinById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.coin = action.payload;
    });
    builder.addCase(getCoinById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload as string;
    });

    // Get Coin Market Chart
    builder.addCase(getCoinMarketChart.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCoinMarketChart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.marketChart = action.payload;
    });
    builder.addCase(getCoinMarketChart.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload as string;
    });
  },
});

export default coinSlice.reducer;
