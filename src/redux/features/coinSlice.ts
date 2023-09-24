import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import coinServices from "./coinServices";
import { ICoinState } from "../../interfaces/CoinInterface";

const initialState: ICoinState = {
  coins: [],
   coin: null,
  trendingCoins: [],
  marketChart: null,
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
  },
});

export default coinSlice.reducer;
