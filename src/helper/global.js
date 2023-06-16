import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const makeAPIRequest = async (method, url, data = {}) => {

    try {
        const token = await AsyncStorage.getItem('idToken')
        const options = {
            method,
            url,
            headers: {
                authToken_students: token,
                'Content-Type': 'application/json'
            },
        };
        if (data) {
            options.data = data
        }

        const response = await axios.request(options);

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Request failed with status code ${response.status}`);
        }

    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message);
        } else {
            throw error;
        }
    }
};

export default makeAPIRequest;
