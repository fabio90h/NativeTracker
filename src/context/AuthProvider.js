import React from "react";
import createDataContext from "./createDataContext";

// Declare Reducer
const authReducer = (state, actions) => {
	switch (actions.type) {
		default:
			return state;
	}
};

// Declare Actions

// Export
export const { Provider, Context } = createDataContext(authReducer, {}, { isSignedIn: false });
