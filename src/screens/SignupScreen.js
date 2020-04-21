import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View style={styles.container}>
			<Spacer>
				<Text style={{ textAlign: "center" }} h3>
					Sign Up for Tracker
				</Text>
				<Spacer />
			</Spacer>
			<Spacer>
				<Input
					label="Email"
					value={email}
					onChangeText={setEmail}
					autoCapitalize={"none"}
					autoCorrect={false}
				/>
			</Spacer>
			<Spacer>
				<Input
					label="Password"
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					autoCapitalize={"none"}
					autoCorrect={false}
				/>
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
