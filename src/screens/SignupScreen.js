import React, { useContext, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
	const { state, signUp, clearErrorMessage } = useContext(AuthContext);

	useEffect(() => {
		let focus = navigation.addListener("focus", () => {
			clearErrorMessage();
		});
		return focus;
	}, []);

	return (
		<View style={styles.container}>
			<AuthForm
				title="Sign Up for Tracker"
				errorMessage={state.errorMessage}
				onSubmit={signUp}
				onSubmitText="Sign Up"
			/>
			<NavLink navigateText="Signin" linkText="Alread Have an Account. Sign in instead." />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginBottom: 150,
	},
	signInStyle: {
		color: "blue",
		textAlign: "center",
	},
});

export default SignupScreen;
