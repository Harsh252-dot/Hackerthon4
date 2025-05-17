import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSessionsAPI, addSessionAPI } from "./sessionAPI";

// Thunks
export const fetchSessions = createAsyncThunk(
  "sessions/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchSessionsAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addSession = createAsyncThunk(
  "sessions/add",
  async (sessionData, { rejectWithValue }) => {
    try {
      const data = await addSessionAPI(sessionData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const sessionSlice = createSlice({
  name: "sessions",
  initialState: {
    sessions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchSessions cases
      .addCase(fetchSessions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSessions.fulfilled, (state, action) => {
        state.loading = false;
        state.sessions = action.payload;
      })
      .addCase(fetchSessions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // addSession cases
      .addCase(addSession.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSession.fulfilled, (state, action) => {
        state.loading = false;
        state.sessions.push(action.payload);
      })
      .addCase(addSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default sessionSlice.reducer;
