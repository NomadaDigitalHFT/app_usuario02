import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
