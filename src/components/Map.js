import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";

import MapView from "react-native-maps";

const Map = () => {
	const {
		state: { currentLocation },
	} = useContext(LocationContext);

	if (!currentLocation) {
		return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
	}

	return (
		<>
			<MapView
				style={styles.map}
				initialRegion={{ ...currentLocation.coords, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
				region={{ ...currentLocation.coords, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
			/>
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
