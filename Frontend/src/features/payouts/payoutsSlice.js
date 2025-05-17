// src/features/payouts/payoutsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPayoutsAPI, generatePayoutAPI } from "./payoutAPI";

// Thunks
export const fetchPayouts = createAsyncThunk("payouts/fetchAll", async () => {
  const data = await fetchPayoutsAPI();
  return data;
});

export const generatePayout = createAsyncThunk("payouts/generate", async (payoutData) => {
  const data = await generatePayoutAPI(payoutData);
  return data;
});

const payoutsSlice = createSlice({
  name: "payouts",
  initialState: {
    payouts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayouts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPayouts.fulfilled, (state, action) => {
        state.loading = false;
        state.payouts = action.payload;
      })
      .addCase(fetchPayouts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(generatePayout.fulfilled, (state, action) => {
        state.payouts.push(action.payload);
      });
  },
});

export default payoutsSlice.reducer;
