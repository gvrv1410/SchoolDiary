import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiConstants, DELETE } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const deleteComplain = createAsyncThunk(
  "data/deleteComplainn",
  async (data) => {
    const token = await AsyncStorage.getItem("idToken");
    const response = await axios
      .delete(`${apiConstants.deleteComplain}/${data?.id}`, {
        headers: {
          authToken_students: token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res?.data;
      })
      .catch((e) => {
        throw e;
      });
  }
);

const deleteComplainReducer = createSlice({
  name: "deleteComplains",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteComplain.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteComplain.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action?.payload;
    });
    builder.addCase(deleteComplain.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload;
    });
  },
});

export default deleteComplainReducer.reducer;
