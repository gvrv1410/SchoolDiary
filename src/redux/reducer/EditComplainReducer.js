import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, PATCH } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const editComplain = createAsyncThunk(
  "data/editComplain",
  async (data) => {
    const newData = {
      Complain_title: data.Complain_title,
      Complain_descriptio: data.Complain_descriptio,
    };
    const response = await makeAPIRequest(
      PATCH,
      `${apiConstants.editComplain}/${data.id}`,
      newData,
      "application/json"
    );
    try {
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const editComplainReducer = createSlice({
  name: "editComplain",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editComplain.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editComplain.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(editComplain.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default editComplainReducer.reducer;
