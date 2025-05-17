import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAuditLogsAPI } from "./auditAPI";

export const fetchAuditLogs = createAsyncThunk(
  "audit/fetchLogs",
  async () => {
    const data = await fetchAuditLogsAPI();
    return data;
  }
);

const auditSlice = createSlice({
  name: "audit",
  initialState: {
    logs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuditLogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuditLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.logs = action.payload;
      })
      .addCase(fetchAuditLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default auditSlice.reducer;
