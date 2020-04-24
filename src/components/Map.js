import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";

import MapView from "react-native-maps";
import { requestPermissionsAsync } from "expo-location";

const Map = () => {
	const [mapError, setMapError] = useState(null);

	const startWatching = async () => {
		try {
			let permission = await requestPermissionsAsync();
			if (permission.status === "denied") {
				setMapError("You must enable locations to use this feature");
			}
		} catch (error) {
			setMapError(error);
		}
	};

	useEffect(() => {
		startWatching();
	});

	return (
		<>
			<MapView
				style={styles.map}
				initialRegion={{ latitude: 38, longitude: -122, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
			/>
			{mapError ? <Text>{mapError}</Text> : null}
		</>
	);
};

const styles = StyleSheet.create({
	map: {
		width: 200,
		height: 200,
	},
});

export default Map;
