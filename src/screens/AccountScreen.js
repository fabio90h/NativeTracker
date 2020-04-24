import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
	const { signOut } = useContext(AuthContext);

	return (
		<SafeAreaView>
			<Text>AccountScreen</Text>
			<Spacer>
				<Button title="Sign out" onPress={() => signOut()} />
			</Spacer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default AccountScreen;
