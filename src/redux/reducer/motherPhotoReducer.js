import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, PATCH } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const profileMotherUpdate = createAsyncThunk(
  "data/editMotherProfiles",
  async (data) => {
    const nD = data.S_mother_photo;
    try {
      const imageOne = {
        uri: Platform.OS === "ios" ? nD.replace("file://", "") : nD,
        type: "image/*",
        name: nD.split("/").pop(),
      };
      const formData = new FormData();
      formData.append("S_mother_photo", imageOne);

      const response = await makeAPIRequest(
        "PATCH",
        apiConstants.addMotherPhoto,
        formData,
        {
          heders: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response;
    } catch (error) {
      throw error;
    }
  }
);

const motherPhotoReducer = createSlice({
  name: "editMotherProfile",
  initialState: {
    loading: false,
    error: null,
    data1: null,
  },
  reducers: {
    // Define your custom reducers here
  },
  extraReducers: (builder) => {
    builder.addCase(profileMotherUpdate.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(profileMotherUpdate.fulfilled, (state, action) => {
      state.loading = false;
      state.data1 = action.payload;
    });
    builder.addCase(profileMotherUpdate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message; // Store the error message
    });
  },
});

export default motherPhotoReducer.reducer;
