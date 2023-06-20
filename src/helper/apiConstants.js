export const BASE_URL = "http://192.168.29.95:5050/";

const GET = 'get';
const POST = 'post';
const DELETE = 'delete';
const PATCH = 'patch';



const apiConstants = {
    loginStudent: `${BASE_URL}api/students/student_login`,
    fetchStudent: `${BASE_URL}api/students/fetch_all_details_of_login_students`,
    fetchStudentSubject: `${BASE_URL}api/students/get_all_subjects_class_wise`,
    fetchHomeWork: `${BASE_URL}api/students/fetch_all_homeworks_of_the_subject`,
    addComplain: `${BASE_URL}api/students/send_complain_to_teacher`,
    fetchTeacher: `${BASE_URL}api/students/fetch_all_teachers`,
    fetchTeacherImages: `${BASE_URL}api/students/fetch_img_of_teacher`,
    fetchNotice: `${BASE_URL}api/students/get_all_notice_of_students`,
    fetchComplain: `${BASE_URL}api/students/fetch_complains_of_student`,
    fetchMaterial: `${BASE_URL}api/students/fetch_all_materials_of_the_subjects`,
    fetchTimeTable: `${BASE_URL}api/timetable/fetch_timetable_for_students`,
    deleteComplain: `${BASE_URL}api/students/delete_complain`,
    editComplain: `${BASE_URL}api/students/edit_complain`,
    fetchExamTimeTable: `${BASE_URL}api/examtimetable/fetch_all_examtimetable_for_students`,
    fetchHoliday: `${BASE_URL}api/students/get_all_holidays_of_students`,
    fetchResults: `${BASE_URL}api/students/fetch_results_of_student`,
    fetchEvent: `${BASE_URL}api/students/fetch_all_events_photoes`
}



export { GET, POST, DELETE, PATCH, apiConstants };