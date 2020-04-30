import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { useContext } from "react";
import { navigate } from "../RootNavigation";

export default () => {
	const {
		state: { name, locations },
		reset,
	} = useContext(LocationContext);
	const { saveTrack } = useContext(TrackContext);

	const handleSaveTrack = async () => {
		await saveTrack(name, locations);
		reset();
		navigate("trackListFlow");
	};

	return [handleSaveTrack];
};
