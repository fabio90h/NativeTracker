import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location";
import { useEffect, useState } from "react";
//import "../_mockLocation";

export default (callback) => {
	const [mapError, setMapError] = useState(null);

	const startWatching = async () => {
		try {
			let permission = await requestPermissionsAsync();
			if (permission.status === "denied") {
				setMapError("You must enable locations to use this feature");
			}
			await watchPositionAsync(
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

	useEffect(() => {
		startWatching();
	}, []);

	return [mapError];
};
