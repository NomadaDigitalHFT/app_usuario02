import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { UserProvider } from "./src/contexts/UserContext";
import { enableScreens } from 'react-native-screens';
import { LogBox } from 'react-native';

enableScreens(); // Mejora el rendimiento en navegación
LogBox.ignoreLogs(['props.pointerEvents is deprecated']);

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
