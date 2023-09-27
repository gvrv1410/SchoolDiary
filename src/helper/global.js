import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const makeAPIRequest = async (method, url, data, headers, params) => {
  try {
    const token = await AsyncStorage.getItem("idToken");
    const headers = {
      authToken_students: token,
    };

    const options = {
      ...{
        method,
        url,
        data,
        params,
      },
      ...(token && { headers: { authToken_students: token } }),
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
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw new Error(error.response.data.message);
      } else if (error.response && error.response.data) {
        throw new Error("Request failed", error.response.status);
      } else {
        throw new Error("Request failed", error);
      }
    } else {
      throw error;
    }
  }
};

export default makeAPIRequest;
