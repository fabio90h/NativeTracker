import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location";
import { useEffect, useState } from "react";
//import "../_mockLocation";

export default (shouldTrack, callback) => {
	const [mapError, setMapError] = useState(null);
	const [subscribe, setSubscribe] = useState(null);

	const startWatching = async () => {
		try {
			let permission = await requestPermissionsAsync();
			if (permission.status === "denied") {
				setMapError("You must enable locations to use this feature");
			}
			let sub = await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distanceInterval: 10,
				},
				callback
			);
			setSubscribe(sub);
		} catch (error) {
			setMapError(error);
		}
	};

	useEffect(() => {
		if (shouldTrack) startWatching();
		else {
			subscribe.remove();
			setSubscribe(null);
		}
	}, [shouldTrack]);

	return [mapError];
};
