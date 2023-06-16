import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../reducer/authReducer';
import fetchTeacherReducer from '../reducer/fetchTeacherReducer';
import studentReducer from '../reducer/studentReducer';
import subjectReducer from '../reducer/subjectReducer';
import noticeReducer from '../reducer/noticeReducer';
import complainSlice from '../reducer/sendComplainReducer'
import fetchComplainReducer from '../reducer/fetchComplainReducer';
import materialReducer from '../reducer/materialReducer';
import timeTableReducer from '../reducer/timeTableReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    student: studentReducer,
    subject: subjectReducer,
    teacher: fetchTeacherReducer,
    notice: noticeReducer,
    compain: complainSlice,
    fetchComplain: fetchComplainReducer,
    material: materialReducer,
    timetable: timeTableReducer
});

export default rootReducer;
