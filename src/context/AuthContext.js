import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../RootNavigation";

// Declare Reducer
const authReducer = (state, action) => {
	switch (action.type) {
		case "clear_error":
			return { ...state, errorMessage: "" };
		case "signout":
			return { errorMessage: "", token: null };
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

const signOut = (dispatch) => async () => {
	await AsyncStorage.removeItem("token");
	dispatch({ type: "signout" });
	navigate("loginFlow");
};

const signInLocally = (dispatch) => async () => {
	let token = await AsyncStorage.getItem("token");
	if (token) {
		dispatch({ type: "signin", payload: token });
		navigate("mainFlow");
	} else {
		navigate("loginFlow");
	}
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
	{ signUp, signIn, clearErrorMessage, signInLocally, signOut },
	{ token: null, errorMessage: "" }
);
