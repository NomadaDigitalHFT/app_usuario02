import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GeoLocationScreen from '../screens/GeoLocationScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import TripProgressScreen from '../screens/TripProgressScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ReviewScreen from '../screens/ReviewScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Inicio', headerShown: true }}
      />
      <Stack.Screen
        name="GeoLocation"
        component={GeoLocationScreen}
        options={{ title: 'Geolocalización', headerShown: true }}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmationScreen}
        options={{ title: 'Confirmación', headerShown: true }}
      />
      <Stack.Screen
        name="TripProgress"
        component={TripProgressScreen}
        options={{ title: 'Progreso del Viaje', headerShown: true }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Mi Perfil', headerShown: true }}
      />
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{ title: 'Historial', headerShown: true }}
      />
      <Stack.Screen
        name="Review"
        component={ReviewScreen}
        options={{ title: 'Calificación', headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;

