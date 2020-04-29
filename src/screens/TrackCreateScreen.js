import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as LocationContext } from "../context/LocationContext";
import TrackForm from "../components/TrackForm";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
	const { state, addLocation } = useContext(LocationContext);
	const [mapError] = useLocation(useIsFocused(), (location) =>
		addLocation(state.recording, location)
	);

	return (
		<SafeAreaView>
			<Map />
			{mapError ? <Text>{mapError}</Text> : null}
			<TrackForm />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
