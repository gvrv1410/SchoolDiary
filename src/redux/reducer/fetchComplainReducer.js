import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const fetchComplainData = createAsyncThunk('data/fetchComplainData', async () => {
    const response = await makeAPIRequest(POST, apiConstants.fetchComplain, 'application/json')
    try {
        console.log({ response });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
})

const fetchComplainReducer = createSlice({
    name: 'fetchComplain',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComplainData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchComplainData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchComplainData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default fetchComplainReducer.reducer;