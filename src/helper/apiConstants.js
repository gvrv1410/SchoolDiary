export const BASE_URL = "https://api.nutanpublic.naavhub.com/";
export const VERSION = "api/";
// export const BASE_URL = "http://192.168.29.95:5050/";

const GET = "get";
const POST = "post";
const DELETE = "delete";
const PATCH = "patch";

const apiConstants = {
  loginStudent: `${BASE_URL}${VERSION}students/student_login`,
  fetchStudent: `${BASE_URL}${VERSION}students/fetch_all_details_of_login_students`,
  fetchStudentSubject: `${BASE_URL}${VERSION}students/get_all_subjects_class_wise`,
  fetchHomeWork: `${BASE_URL}${VERSION}students/fetch_all_homeworks_of_the_subject`,
  addComplain: `${BASE_URL}${VERSION}students/send_complain_to_teacher`,
  fetchTeacher: `${BASE_URL}${VERSION}students/fetch_all_teachers`,
  fetchTeacherImages: `${BASE_URL}${VERSION}students/fetch_img_of_teacher`,
  fetchNotice: `${BASE_URL}${VERSION}students/get_all_notice_of_students`,
  fetchComplain: `${BASE_URL}${VERSION}students/fetch_complains_of_student`,
  fetchMaterial: `${BASE_URL}${VERSION}students/fetch_all_materials_of_the_subjects`,
  fetchTimeTable: `${BASE_URL}${VERSION}timetable/fetch_timetable_for_students`,
  deleteComplain: `${BASE_URL}${VERSION}students/delete_complain`,
  editComplain: `${BASE_URL}${VERSION}students/edit_complain`,
  fetchExamTimeTable: `${BASE_URL}${VERSION}examtimetable/fetch_all_examtimetable_for_students`,
  fetchHoliday: `${BASE_URL}${VERSION}students/get_all_holidays_of_students`,
  fetchResults: `${BASE_URL}${VERSION}students/fetch_results_of_student`,
  fetchEvent: `${BASE_URL}${VERSION}students/fetch_all_events_photoes`,
  addStudentPhoto: `${BASE_URL}${VERSION}students/add_student_photo`,
  addFatherPhoto: `${BASE_URL}${VERSION}students/add_student_father_photo`,
  addMotherPhoto: `${BASE_URL}${VERSION}students/add_student_mother_photo`,
  fetchAttendance: `${BASE_URL}${VERSION}attendance/attendance_history_of_students`,
  fetchComplainFromStudent: `${BASE_URL}${VERSION}students/fetch_all_complains`,
};

export { GET, POST, DELETE, PATCH, apiConstants };
