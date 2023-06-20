import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, PATCH } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";



export const profileUpdate = createAsyncThunk('data/editProfiles', async (data) => {
    try {
        const imageOne = {
            uri: Platform.OS === "ios" ? data.S_photo.replace("file://", '') : data.S_photo,
            type: 'image/*',
            name: data.S_photo.split('/').pop()
        }
        const formData = new FormData()
        formData.append('S_photo', imageOne)
        console.log({ formData });

        const response = await makeAPIRequest('PATCH', apiConstants.addStudentPhoto, formData, {
            heders: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log({ S: response.status });
        return response;

    } catch (error) {
        console.log(error.message);
        throw error;
    }
});


const profileReducer = createSlice({
    name: 'editProfile',
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
            console.log('Profile F Update Fulfilled:', action.payload);
        });
        builder.addCase(profileUpdate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message; // Store the error message
        });
    },
});

export default profileReducer.reducer;