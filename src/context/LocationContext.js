import createDataContext from "./createDataContext";

// Reducer
const locationReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Actions
const startRecording = (dispatch) => () => {};
const stopRecording = (dispatch) => () => {};
const addLocation = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
	locationReducer,
	{ startRecording, startRecording, addLocation },
	{ recoding: false, location: [], currentLocation: null }
);
