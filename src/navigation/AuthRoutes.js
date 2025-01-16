import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Iniciar Sesión" }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: "Registro" }} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;

