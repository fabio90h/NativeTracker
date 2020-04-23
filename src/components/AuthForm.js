import React, { useState } from "react";
import { Button, Text, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";

const AuthFrom = ({ title, errorMessage, onSubmitText, onSubmit }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<Spacer>
				<Text style={{ textAlign: "center" }} h3>
					{title}
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
			{/* Error Message */}
			{errorMessage ? (
				<Spacer>
					<Text style={styles.errorMessageStyle}>{errorMessage}</Text>
				</Spacer>
			) : null}
			<Spacer>
				<Button title={onSubmitText} onPress={() => onSubmit({ email, password })} />
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({
	errorMessageStyle: {
		color: "red",
		textAlign: "center",
		fontSize: 16,
	},
});

export default AuthFrom;
