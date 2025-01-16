import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { AuthProvider } from "./src/hooks/AuthProvider";
import { enableScreens } from 'react-native-screens';
import { LogBox } from 'react-native';

enableScreens(); // Mejora el rendimiento en navegación
LogBox.ignoreLogs(['props.pointerEvents is deprecated']);


const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

