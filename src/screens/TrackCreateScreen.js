import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
	const { addLocation } = useContext(LocationContext);
	const [mapError] = useLocation(useIsFocused(), addLocation);

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
