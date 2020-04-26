import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Map from "../components/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";
//import "../_mockLocation";

const TrackCreateScreen = () => {
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
				(location) => console.log(location)
			);
		} catch (error) {
			setMapError(error);
		}
	};

	useEffect(() => {
		startWatching();
	});
	return (
		<SafeAreaView>
			<Text>TrackCreateScreen</Text>
			<Map />
			{mapError ? <Text>{mapError}</Text> : null}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
