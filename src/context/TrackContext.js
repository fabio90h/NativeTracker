import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

// Reducer
const trackReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Actions
const fetchTracks = (dispatch) => () => {};
const saveTrack = (dispatch) => async (name, locations) => {
	try {
		let response = await tracker.post("/tracks", { name, locations });
		console.log("track saved", response.config.data);
	} catch (error) {
		console.error(error);
	}
};

export const { Provider, Context } = createDataContext(
	trackReducer,
	{ fetchTracks, saveTrack },
	[]
);
