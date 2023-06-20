import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const fetchTimeTable = createAsyncThunk('data/fetchTimeTable', async () => {
    const response = await makeAPIRequest(POST, apiConstants.fetchTimeTable, 'application/json')
    try {
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})

const fetchTimeTableReducer = createSlice({
    name: 'timeTable',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTimeTable.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTimeTable.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTimeTable.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default fetchTimeTableReducer.reducer;