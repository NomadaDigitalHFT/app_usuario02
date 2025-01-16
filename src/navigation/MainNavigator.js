import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import GeoLocationScreen from "../screens/GeoLocationScreen";
import { useAuth } from "../hooks/AuthProvider";

const Stack = createStackNavigator();

const MainNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator initialRouteName={user ? "GeoLocation" : "Welcome"}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="GeoLocation" component={GeoLocationScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;


