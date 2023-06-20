import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";


export const fetchEvent = createAsyncThunk('data/eventImg', async () => {
    const response = await makeAPIRequest(POST, apiConstants.fetchEvent, null)
    try {
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})


const eventReducer = createSlice({
    name: 'fetchEventData',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEvent.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchEvent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
})

export default eventReducer.reducer;