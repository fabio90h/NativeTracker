import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";

import MapView from "react-native-maps";

const Map = () => {
	return (
		<>
			<MapView
				style={styles.map}
				initialRegion={{ latitude: 38, longitude: -122, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
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
