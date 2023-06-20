import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";


export const fetchExamResult = createAsyncThunk('data/examResult', async () => {
    const response = await makeAPIRequest(POST, apiConstants.fetchResults, null)
    try {
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})


const resultReducer = createSlice({
    name: 'fetchExamResult',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExamResult.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchExamResult.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchExamResult.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
})

export default resultReducer.reducer;