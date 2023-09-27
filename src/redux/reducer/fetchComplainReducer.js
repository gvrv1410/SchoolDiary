import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const fetchComplainData = createAsyncThunk(
  "data/fetchComplainData",
  async () => {
    const response = await makeAPIRequest(
      POST,
      apiConstants.fetchComplain,
      "application/json"
    );
    try {
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchComplainFromTeacher = createAsyncThunk(
  "data/fetchComplainFromTeachers",
  async () => {
    const response = await makeAPIRequest(
      POST,
      apiConstants.fetchComplainFromStudent,
      "application/json"
    );
    try {
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const fetchComplainReducer = createSlice({
  name: "fetchComplain",
  initialState: {
    data: null,
    complainData: null,
    loading: false,
    error: null,
    complainError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComplainData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComplainData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchComplainData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchComplainFromTeacher.pending, (state) => {
        state.loading = true;
        state.complainError = null;
      })
      .addCase(fetchComplainFromTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.complainData = action.payload;
      })
      .addCase(fetchComplainFromTeacher.rejected, (state, action) => {
        state.loading = false;
        state.complainError = action.error.message;
      });
  },
});

export default fetchComplainReducer.reducer;
