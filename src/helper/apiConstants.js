const BASE_URL = "http://192.168.29.95:5050/api/";

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const DELETE = 'delete';
const PATCH = 'patch';



const apiConstants = {
    loginStudent: `${BASE_URL}students/student_login`
}



export { GET, POST, PUT, DELETE, PATCH, apiConstants };