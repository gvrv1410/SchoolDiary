import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const fetchExamTimeTable = createAsyncThunk(
  "data/examTimeTable",
  async () => {
    const response = await makeAPIRequest(
      POST,
      apiConstants.fetchExamTimeTable,
      "application/json"
    );
    try {
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const examReducer = createSlice({
  name: "fetchExamTimeTable",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExamTimeTable.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExamTimeTable.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchExamTimeTable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default examReducer.reducer;
