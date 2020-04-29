import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location";
import { useEffect, useState } from "react";
import "../_mockLocation";

export default (shouldTrack, callback) => {
	const [mapError, setMapError] = useState(null);

	useEffect(() => {
		let subscriber;
		const startWatching = async () => {
			try {
				let permission = await requestPermissionsAsync();
				if (permission.status === "denied") {
					setMapError("You must enable locations to use this feature");
				}
				subscriber = await watchPositionAsync(
					{
						accuracy: Accuracy.BestForNavigation,
						timeInterval: 1000,
						distanceInterval: 10,
					},
					callback
				);
			} catch (error) {
				setMapError(error);
			}
		};

		if (shouldTrack) startWatching();
		else {
			if (subscriber) subscriber.remove();
			subscriber = null;
		}

		//Clean Up function so this is not stacking up and creating a memory leak
		return () => {
			if (subscriber) subscriber.remove();
		};
	}, [shouldTrack, callback]);

	return [mapError];
};
