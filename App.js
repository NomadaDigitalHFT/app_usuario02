import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { useAuth } from "./src/hooks/AuthProvider";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import HistoryScreen from "./src/screens/HistoryScreen";

const Stack = createStackNavigator();

const App = () => {
  const { user } = useAuth();

  if (user === undefined) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        )}
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
});

export default App;

