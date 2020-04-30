import React, { useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);
	navigation.addListener("focus", fetchTracks);
	console.log(state);
	return (
		<>
			<Text>TrackListScreen</Text>
			<Button onPress={() => navigation.navigate("TrackDetail")} title="Track Detail" />
		</>
	);
};

const styles = StyleSheet.create({});

export default TrackListScreen;
