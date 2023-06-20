import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";


export const fetchStudentHoliday = createAsyncThunk('data/fetchHoliday', async () => {
    const response = await makeAPIRequest(POST, apiConstants.fetchHoliday, 'application/json')
    try {
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
})


const holidayReducer = createSlice({
    name: 'holidays',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudentHoliday.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchStudentHoliday.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchStudentHoliday.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
})

export default holidayReducer.reducer;