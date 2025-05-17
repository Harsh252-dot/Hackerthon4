import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchReceiptsAPI, generateReceiptAPI } from "./receiptAPI";

export const fetchReceipts = createAsyncThunk(
  "receipts/fetchAll",
  async () => {
    const data = await fetchReceiptsAPI();
    return data;
  }
);

export const generateReceipt = createAsyncThunk(
  "receipts/generate",
  async (receiptData) => {
    const data = await generateReceiptAPI(receiptData);
    return data;
  }
);

const receiptsSlice = createSlice({
  name: "receipts",
  initialState: {
    receipts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReceipts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReceipts.fulfilled, (state, action) => {
        state.loading = false;
        state.receipts = action.payload;
      })
      .addCase(fetchReceipts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(generateReceipt.fulfilled, (state, action) => {
        state.receipts.push(action.payload);
      });
  },
});

export default receiptsSlice.reducer;
