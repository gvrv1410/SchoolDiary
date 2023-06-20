import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";


export const homeWorkDetails = createAsyncThunk('data/homeWorkDetails', async (data) => {
    const newData = {
        Subject_code: data.Subject_Code,
        Homework_given_date: data.Homework_given_date
    }
    const response = await makeAPIRequest(POST, apiConstants.fetchHomeWork, newData, 'application/json')
    try {
        console.log({ response });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
});


const homeWorkReducer = createSlice({
    name: 'homeWork',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(homeWorkDetails.pending, (state) => {
                state.error = null;
            })
            .addCase(homeWorkDetails.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(homeWorkDetails.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export default homeWorkReducer.reducer;
