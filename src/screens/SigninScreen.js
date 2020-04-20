import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
	return (
		<>
			<Text>SigninScreen</Text>
			<Button title="Sign in" onPress={() => navigation.navigate("mainFlow")} />
		</>
	);
};

const styles = StyleSheet.create({});

export default SigninScreen;
