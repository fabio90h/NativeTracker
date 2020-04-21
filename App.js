import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

import { Provider as AuthProvider } from "./src/context/AuthProvider";

export default function App() {
	const Stack = createStackNavigator();

	return (
		<AuthProvider>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="loginFlow">
					<Stack.Screen name="loginFlow" component={LoginFlow} />
					<Stack.Screen name="mainFlow" component={MainFlow} />
				</Stack.Navigator>
			</NavigationContainer>
		</AuthProvider>
	);
}

// Navigation between login and sign up
function LoginFlow() {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator initialRouteName="Signup">
			<Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} />
			<Stack.Screen name="Signin" component={SigninScreen} />
		</Stack.Navigator>
	);
}

// Track Navigation
function TrackListFlow() {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen name="TrackList" component={TrackListScreen} />
			<Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
		</Stack.Navigator>
	);
}

// Main App Navigation
function MainFlow() {
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator>
			<Tab.Screen name="Account" component={AccountScreen} />
			<Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
			<Tab.Screen name="trackListFlow" component={TrackListFlow} />
		</Tab.Navigator>
	);
}
