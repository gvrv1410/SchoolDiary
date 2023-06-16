import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiConstants, POST } from '../../helper/apiConstants';
import makeAPIRequest from '../../helper/global';

export const sendComplainData = createAsyncThunk('data/sendComplainData', async (data) => {
    const response = await makeAPIRequest(POST, apiConstants.addComplain, data, null);
    try {
        console.log({ response });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});


const complainSlice = createSlice({
    name: 'complain',
    initialState: {
        loading: false,
        error: null,
        complainData: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendComplainData.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(sendComplainData.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(sendComplainData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default complainSlice.reducer;

