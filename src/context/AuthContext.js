import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import { AsyncStorage } from "react-native";

// Declare Reducer
const authReducer = (state, action) => {
	switch (action.type) {
		case "signup":
			return { errorMessage: "", token: action.payload };
		case "add_error":
			return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};

// Declare Actions
const signUp = (dispatch) => async ({ email, password }) => {
	try {
		let response = await trackerAPI.post("/signup", {
			email,
			password,
		});
		await AsyncStorage.setItem("token", response.data.token);
		dispatch({ type: "signup", payload: response.data.token });
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
	{ signUp },
	{ isSignedIn: false, errorMessage: "" }
);
