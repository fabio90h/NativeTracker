import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navigationRef } from "./src/RootNavigation";

import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";

import { SafeAreaProvider } from "react-native-safe-area-context";

// PROVIDERS
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

export default function App() {
	const Stack = createStackNavigator();

	return (
		<TrackProvider>
			<LocationProvider>
				<AuthProvider>
					<SafeAreaProvider>
						<NavigationContainer ref={navigationRef}>
							<Stack.Navigator
								screenOptions={{ headerShown: false }}
								initialRouteName="ResolveAuth"
							>
								<Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} />
								<Stack.Screen name="loginFlow" component={LoginFlow} />
								<Stack.Screen name="mainFlow" component={MainFlow} />
							</Stack.Navigator>
						</NavigationContainer>
					</SafeAreaProvider>
				</AuthProvider>
			</LocationProvider>
		</TrackProvider>
	);
}

// Navigation between login and sign up
function LoginFlow() {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator initialRouteName="Signup">
			<Stack.Screen options={{ headerShown: false }} name="Signup" component={SignupScreen} />
			<Stack.Screen options={{ headerShown: false }} name="Signin" component={SigninScreen} />
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
