import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
