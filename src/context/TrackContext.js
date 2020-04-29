import createDataContext from "./createDataContext";

// Reducer
const trackReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Actions
const fetchTracks = (dispatch) => () => {};
const saveTrack = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
	trackReducer,
	{ fetchTracks, saveTrack },
	[]
);
