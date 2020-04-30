import React, { useContext } from "react";
import { Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);
	navigation.addListener("focus", fetchTracks);

	if (state.length === 0) return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
	return (
		<FlatList
			data={state}
			keyExtractor={(current) => current._id}
			renderItem={(current) => {
				return (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("TrackDetail", { locations: current.item.locations })
						}
					>
						<ListItem chevron title={current.item.name} />
					</TouchableOpacity>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({});

export default TrackListScreen;
