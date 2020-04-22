import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
	const { state, signUp } = useContext(AuthContext);
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
				<Button title="Sign Up" onPress={() => signUp({ email, password })} />
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
