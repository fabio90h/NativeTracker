import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";

// Declare Reducer
const authReducer = (state, action) => {
	switch (action.type) {
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
		console.log(response);
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
