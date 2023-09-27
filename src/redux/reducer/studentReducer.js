import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const fetchStudentData = createAsyncThunk(
  "student/fetchData",
  async () => {
    const response = await makeAPIRequest(
      POST,
      apiConstants?.fetchStudent,
      "application/json"
    );
    try {
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const studentReducer = createSlice({
  name: "student",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudentData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStudentData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default studentReducer.reducer;
