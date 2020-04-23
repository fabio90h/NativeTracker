import React, { useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
	const { state, signIn } = useContext(AuthContext);
	return (
		<View style={styles.container}>
			<AuthForm
				title="Sign in Tracker"
				errorMessage={state.errorMessage}
				onSubmit={signIn}
				onSubmitText="Sign In"
			/>
			<NavLink linkText="Dont have an Account? Sign up here." navigateText="Signup" />
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

export default SigninScreen;
