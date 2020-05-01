import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ route }) => {
	const { state } = useContext(TrackContext);
	const track = state.find((current) => current._id === route.params._id);
	console.log(track.name);
	return (
		<>
			<Text>TrackDetailScreen</Text>
		</>
	);
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
