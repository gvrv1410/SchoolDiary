const BASE_URL = "http://192.168.29.95:5050/api/";

const GET = 'get';
const POST = 'post';
const DELETE = 'delete';
const PATCH = 'patch';



const apiConstants = {
    loginStudent: `${BASE_URL}students/student_login`,
    fetchStudent: `${BASE_URL}students/fetch_all_details_of_login_students`,
    fetchStudentSubject: `${BASE_URL}students/get_all_subjects_class_wise`
}



export { GET, POST, DELETE, PATCH, apiConstants };