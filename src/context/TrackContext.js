import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

// Reducer
const trackReducer = (state, action) => {
	switch (action.type) {
		case "fetch_tracks":
			return action.payload;
		default:
			return state;
	}
};

// Actions
const fetchTracks = (dispatch) => async () => {
	try {
		let response = await tracker.get("/tracks");
		dispatch({ type: "fetch_tracks", payload: response.data });
	} catch (error) {
		console.error(error);
	}
};
const saveTrack = (dispatch) => async (name, locations) => {
	try {
		let response = await tracker.post("/tracks", { name, locations });
	} catch (error) {
		console.error(error);
	}
};

export const { Provider, Context } = createDataContext(
	trackReducer,
	{ fetchTracks, saveTrack },
	[]
);
