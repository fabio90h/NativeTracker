import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Map from "../components/Map";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackCreateScreen = () => {
	return (
		<SafeAreaView>
			<Text>TrackCreateScreen</Text>
			<Map />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
