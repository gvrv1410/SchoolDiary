import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const fetchNoticeData = createAsyncThunk(
  "notice/fetchData",
  async () => {
    const response = await makeAPIRequest(
      POST,
      apiConstants.fetchNotice,
      "application/json"
    );
    try {
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const noticeReducer = createSlice({
  name: "notice",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNoticeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNoticeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNoticeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default noticeReducer.reducer;
