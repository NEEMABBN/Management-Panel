import axios from "axios";

const axiosBaseURL = axios.create({
	baseURL: "https://666d56707a3738f7cacc1ba4.mockapi.io/api/v1",
});

export default axiosBaseURL;
