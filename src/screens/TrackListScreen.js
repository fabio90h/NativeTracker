import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
	return (
		<>
			<Text>TrackListScreen</Text>
			<Button onPress={() => navigation.navigate("TrackDetail")} title="Track Detail" />
		</>
	);
};

const styles = StyleSheet.create({});

export default TrackListScreen;
