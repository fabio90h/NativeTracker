import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../RootNavigation";

// Declare Reducer
const authReducer = (state, action) => {
	switch (action.type) {
		case "clear_error":
			return { ...state, errorMessage: "" };
		case "signin":
			return { errorMessage: "", token: action.payload };
		case "add_error":
			return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};

// Declare Actions
const clearErrorMessage = (dispatch) => () => {
	dispatch({ type: "clear_error" });
};
const signUp = (dispatch) => async ({ email, password }) => {
	try {
		let response = await trackerAPI.post("/signup", {
			email,
			password,
		});
		await AsyncStorage.setItem("token", response.data.token);
		dispatch({ type: "signin", payload: response.data.token });
		navigate("mainFlow");
	} catch (error) {
		dispatch({
			type: "add_error",
			payload: "An error has occured when signing up. Please try again later.",
		});
	}
};

const signIn = (dispatch) => async ({ email, password }) => {
	try {
		let response = await trackerAPI.post("/signin", { email, password });
		await AsyncStorage.setItem("token", response.data.token);
		dispatch({ type: "signin", payload: response.data.token });
		navigate("mainFlow");
	} catch (error) {
		dispatch({
			type: "add_error",
			payload: "An error has occured when signing in. Please try again later.",
		});
	}
};

// Export
export const { Provider, Context } = createDataContext(
	authReducer,
	{ signUp, signIn, clearErrorMessage },
	{ isSignedIn: false, errorMessage: "" }
);
