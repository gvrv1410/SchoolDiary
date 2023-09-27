import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiConstants, PATCH } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const profileUpdate = createAsyncThunk(
  "data/editProfiles",
  async (data) => {
    const token = await AsyncStorage.getItem("idToken");
    try {
      const imageOne = {
        uri:
          Platform.OS === "ios"
            ? data.S_photo.replace("file://", "")
            : data.S_photo,
        type: "image/*",
        name: data.S_photo.split("/").pop(),
      };
      const formData = new FormData();
      formData.append("S_photo", imageOne);
      const response = await axios.patch(
        apiConstants.addStudentPhoto,
        formData,
        {
          headers: {
            authToken_students: token,
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

const profileReducer = createSlice({
  name: "editProfile",
  initialState: {
    loading: false,
    error: null,
    data: null,
  },
  reducers: {
    // Define your custom reducers here
  },
  extraReducers: (builder) => {
    builder.addCase(profileUpdate.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(profileUpdate.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(profileUpdate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message; // Store the error message
    });
  },
});

export default profileReducer.reducer;
