import { getStateFromPath } from "@react-navigation/native";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import getStoredState from "redux-persist/es/getStoredState";
import { apiConstants, POST } from "../../helper/apiConstants";
import makeAPIRequest from "../../helper/global";

export const fetchSubjectData = createAsyncThunk(
    'subject/fetchData',
    async () => {


        const response = await makeAPIRequest(POST, apiConstants.fetchStudentSubject, null);
        try {
            console.log({ response });
            return response.data;
        } catch (error) {
            console.log({ error });
            throw error;
        }
    }
);


const subjectReducer = createSlice({
    name: 'subject',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubjectData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSubjectData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSubjectData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default subjectReducer.reducer;
