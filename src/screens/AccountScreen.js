import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
	const { signOut } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<Text>AccountScreen</Text>
			<Spacer>
				<Button title="Sign out" onPress={() => signOut()} />
			</Spacer>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginBottom: 250,
	},
});

export default AccountScreen;
