import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Spacer from "./Spacer";

const NavLink = ({ navigateText, linkText }) => {
	const navigation = useNavigation();

	return (
		<Spacer>
			<TouchableOpacity onPress={() => navigation.navigate(navigateText)}>
				<Text style={styles.linkStyle}>{linkText}</Text>
			</TouchableOpacity>
		</Spacer>
	);
};

const styles = StyleSheet.create({
	linkStyle: {
		color: "blue",
		textAlign: "center",
	},
});

export default NavLink;
