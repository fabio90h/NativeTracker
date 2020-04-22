import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";

// Declare Reducer
const authReducer = (state, action) => {
	switch (action.type) {
		default:
			return [...state];
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
		console.error(error);
	}
};

// Export
export const { Provider, Context } = createDataContext(
	authReducer,
	{ signUp },
	{ isSignedIn: false }
);
