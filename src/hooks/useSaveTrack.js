import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { useContext } from "react";

export default () => {
	const {
		state: { name, locations },
	} = useContext(LocationContext);
	const { saveTrack } = useContext(TrackContext);

	const handleSaveTrack = () => {
		saveTrack(name, locations);
	};

	return [handleSaveTrack];
};
