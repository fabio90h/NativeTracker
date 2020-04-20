import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
	return (
		<>
			<Text>SignupScreen</Text>
			<Button title="Sign in instead" onPress={() => navigation.navigate("Signin")} />
		</>
	);
};

const styles = StyleSheet.create({});

export default SignupScreen;
