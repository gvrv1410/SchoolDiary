import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiConstants, POST } from '../../helper/apiConstants';
import makeAPIRequest from '../../helper/global';

export const fetchMaterialData = createAsyncThunk(
    'student/fetchData',
    async () => {
        const response = await makeAPIRequest(POST, apiConstants.fetchMaterial, null, null);
        try {
            console.log({ response });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);

const materialReducer = createSlice({
    name: 'maerial',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMaterialData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMaterialData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMaterialData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default materialReducer.reducer;
