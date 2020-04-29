import createDataContext from "./createDataContext";

// Reducer
const locationReducer = (state, action) => {
	switch (action.type) {
		case "add_current_location":
			return { ...state, currentLocation: action.payload };
		case "stop_recording":
			return { ...state, recording: false };
		case "start_recording":
			return { ...state, recording: true };
		case "add_location":
			return { ...state, location: [...state.location, action.payload] };
		case "change_name":
			return { ...state, name: action.payload };
		default:
			return state;
	}
};

// Actions
const changeName = (dispatch) => (name) => {
	dispatch({ type: "change_name", payload: name });
};
const startRecording = (dispatch) => () => {
	dispatch({ type: "start_recording" });
};
const stopRecording = (dispatch) => () => {
	dispatch({ type: "stop_recording" });
};
const addLocation = (dispatch) => (recording, location) => {
	dispatch({ type: "add_current_location", payload: location });
	if (recording) {
		dispatch({ type: "add_location", payload: location });
	}
};

export const { Context, Provider } = createDataContext(
	locationReducer,
	{ startRecording, stopRecording, addLocation, changeName },
	{ name: "", recording: false, location: [], currentLocation: null }
);
