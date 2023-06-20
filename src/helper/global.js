

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from 'axios';

// const makeAPIRequest = async (method, url, data = {}, contentType = {}) => {
//     try {
//         const token = await AsyncStorage.getItem('idToken');
//         const options = {
//             method,
//             url,
//             headers: {
//                 authToken_students: token,
//             },
//         };

//         if (contentType === 'application/json') {
//             options.headers['Content-Type'] = 'application/json';
//             options.data = JSON.stringify(data);
//         } else if (contentType === 'multipart/form-data') {
//             options.headers['Content-Type'] = 'multipart/form-data';
//             const formData = new FormData();
//             for (const key in data) {
//                 formData.append(key, data[key]);
//             }
//             options.data = formData;
//         }

//         const response = await axios(options);

//         if (response.status === 200) {
//             return response;
//         } else {
//             throw new Error(`Request failed with status code ${response.status}`);
//         }
//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             throw new Error(error);
//         } else {
//             throw error;
//         }
//     }
// };

// export default makeAPIRequest;


import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const makeAPIRequest = async (method, url, data, headers, params) => {
    try {
        const token = await AsyncStorage.getItem('idToken');
        console.log({ token });
        const headers = {
            authToken_students: token,
        };
        // let requestData = data;

        // if (contentType === 'application/json') {
        //     headers['Content-Type'] = 'application/json';
        //     requestData = JSON.stringify(data);
        // } else if (contentType === 'multipart/form-data') {
        //     headers['Content-Type'] = 'multipart/form-data';
        //     const formData = new FormData();
        //     for (const key in data) {
        //         formData.append(key, data[key]);
        //     }
        //     requestData = formData;
        // }

        const options = {
            ...{
                method,
                url,
                data,
                params,
            },
            ...(token && { headers: { "authToken_students": token } }),
        };
        if (headers) {
            options.headers = { ...options.headers, ...headers };
        }
        const response = await axios(options);

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Request failed with status code ${response.status}`);
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.data && error.response.data.message) {
                throw new Error(error.response.data.message);
            } else if (error.response && error.response.data) {
                throw new Error('Request failed', error.response.status);
            } else {
                throw new Error('Request failed', error);
            }
        } else {
            throw error;
        }
    }
};

export default makeAPIRequest;
