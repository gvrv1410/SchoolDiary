import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const fetchAttendanceData = createAsyncThunk(
  "data/fetchAttendanceData1",
  async () => {
    try {
      const response = await makeAPIRequest(
        POST,
        apiConstants.fetchAttendance,
        "application/json"
      );

      return response; // Assuming the response is in the expected format
    } catch (error) {
      throw error;
    }
  }
);

const attendanceReducer = createSlice({
  name: "fetchAttendancedata",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttendanceData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAttendanceData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Pass the response as the payload
      })
      .addCase(fetchAttendanceData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default attendanceReducer.reducer;
