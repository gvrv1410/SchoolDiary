import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const fetchTeacherData = createAsyncThunk(
  "student/fetchTeacherData",
  async () => {
    const response = await makeAPIRequest(
      POST,
      apiConstants.fetchTeacher,
      "application/json"
    );
    try {
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const teacherReducer = createSlice({
  name: "teacher",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeacherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeacherData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTeacherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default teacherReducer.reducer;
