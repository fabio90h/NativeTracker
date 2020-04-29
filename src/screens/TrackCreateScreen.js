import React, { useContext, useCallback } from "react";
import { Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as LocationContext } from "../context/LocationContext";
import TrackForm from "../components/TrackForm";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
	const { state, addLocation } = useContext(LocationContext);
	const callback = useCallback((location) => addLocation(state.recording, location), [
		state.recording,
	]);
	const [mapError] = useLocation(useIsFocused(), callback);

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
