import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ route }) => {
	const { state } = useContext(TrackContext);
	const track = state.find((current) => current._id === route.params._id);
	const initialCoords = track.locations[0].coords;
	return (
		<>
			<MapView
				style={styles.map}
				initialRegion={{ longitudeDelta: 0.01, latitudeDelta: 0.01, ...initialCoords }}
			>
				<Polyline coordinates={track.locations.map((location) => location.coords)} />
			</MapView>
		</>
	);
};

const styles = StyleSheet.create({
	map: {
		width: "auto",
		height: 350,
	},
});

export default TrackDetailScreen;
