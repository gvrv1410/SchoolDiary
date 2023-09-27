import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../reducer/authReducer";
import fetchTeacherReducer from "../reducer/fetchTeacherReducer";
import studentReducer from "../reducer/studentReducer";
import subjectReducer from "../reducer/subjectReducer";
import noticeReducer from "../reducer/noticeReducer";
import complainSlice from "../reducer/sendComplainReducer";
import fetchComplainReducer from "../reducer/fetchComplainReducer";
import timeTableReducer from "../reducer/timeTableReducer";
import deleteComplainReducer from "../reducer/deleteComplainReducer";
import EditComplainReducer from "../reducer/EditComplainReducer";
import homeWorkReducer from "../reducer/homeWorkReducer";
import materialReducer from "../reducer/materialReducer";
import examReducer from "../reducer/examReducer";
import holidayReducer from "../reducer/holidayReducer";
import resultReducer from "../reducer/resultReducer";
import eventReducer from "../reducer/eventReducer";
import profileReducer from "../reducer/profileReducer";
import fatherPhotoReducer from "../reducer/fatherPhotoReducer";
import motherPhotoReducer from "../reducer/motherPhotoReducer";
import attendanceReducer from "../reducer/attendanceReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer,
  subject: subjectReducer,
  teacher: fetchTeacherReducer,
  notice: noticeReducer,
  compain: complainSlice,
  fetchComplain: fetchComplainReducer,
  materialData: materialReducer,
  timetable: timeTableReducer,
  deleteComplainss: deleteComplainReducer,
  editComplain: EditComplainReducer,
  homeWorkDetails: homeWorkReducer,
  examTimeTable: examReducer,
  holiday: holidayReducer,
  result: resultReducer,
  event: eventReducer,
  profile: profileReducer,
  fatherp: fatherPhotoReducer,
  motherp: motherPhotoReducer,
  attendanceDataFetch: attendanceReducer,
});

export default rootReducer;
