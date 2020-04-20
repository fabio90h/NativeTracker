import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Spacer>
				<Text style={{ textAlign: "center" }} h3>
					Sign Up for Tracker
				</Text>
				<Spacer />
			</Spacer>
			<Spacer>
				<Input label="Email" />
			</Spacer>
			<Spacer>
				<Input label="Password" />
			</Spacer>
			<Spacer>
				<Button title="Sign Up" onPress={() => navigation.navigate("Signin")} />
			</Spacer>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginBottom: 150,
	},
});

export default SignupScreen;
