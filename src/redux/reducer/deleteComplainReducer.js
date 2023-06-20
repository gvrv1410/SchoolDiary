import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, DELETE } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const deleteComplain = createAsyncThunk('data/deleteComplain', async (data) => {
    const url = `${apiConstants.deleteComplain}/${data.id}`; // Append the ID to the URL
    const response = await makeAPIRequest(DELETE, url, null);
    try {
        console.log({ Delete: response });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const deleteComplainReducer = createSlice({
    name: 'deleteComplain',
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
            state.data = action.payload;
        });
        builder.addCase(deleteComplain.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default deleteComplainReducer.reducer;

