import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, PATCH } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";


export const profileFatherUpdate = createAsyncThunk('data/editFatherProfiles', async (data) => {
    console.log({ SF: data.S_father_photo });
    const nD = data.S_father_photo
    try {
        const imageOne = {
            uri: Platform.OS === "ios" ? nD.replace("file://", '') : nD,
            type: 'image/*',
            name: nD.split('/').pop()
        }
        const formData = new FormData()
        formData.append('S_father_photo', imageOne)
        console.log({ formData });

        const response = await makeAPIRequest('PATCH', apiConstants.addFatherPhoto, formData, {
            heders: {
                'Content-Type': 'multipart/form-data'
            }
        });

        console.log({ F: response.status });
        return response;

    } catch (error) {
        console.log(error.message);
        throw error;
    }
});


const fatherPhotoReducer = createSlice({
    name: 'editFatherProfile',
    initialState: {
        loading: false,
        error: null,
        data1: null,
    },
    reducers: {
        // Define your custom reducers here
    },
    extraReducers: (builder) => {
        builder.addCase(profileFatherUpdate.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(profileFatherUpdate.fulfilled, (state, action) => {
            state.loading = false;
            state.data1 = action.payload;
            console.log('Profile Update Fulfilled:', action.payload);
        });
        builder.addCase(profileFatherUpdate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message; // Store the error message
        });
    },
});

export default fatherPhotoReducer.reducer;