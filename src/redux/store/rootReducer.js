import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../reducer/authReducer';
import studentReducer from '../reducer/studentReducer';
import subjectReducer from '../reducer/subjectReducer';
// import authReducer from './authSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    student: studentReducer,
    subject: subjectReducer
    // Add other reducers here
});

export default rootReducer;
