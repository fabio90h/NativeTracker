import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
	baseURL: "http://670f7114.ngrok",
});

instance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem("token");
		if (token) config.headers.Authorization = `Bearer ${token}`;
	},
	(err) => Promise.reject(err)
);

export default instance;
