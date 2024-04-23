import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // config.withCredentials = true;
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      config.headers.Authorization = jwtToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios;
