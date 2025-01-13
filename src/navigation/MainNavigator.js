import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* Pantalla de inicio */}
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Inicio', headerShown: true }}
                />

                {/* Pantalla de geolocalización */}
                <Stack.Screen
                    name="GeoLocation"
                    component={GeoLocationScreen}
                    options={{ title: 'Geolocalización', headerShown: true }}
                />

                {/* Pantalla de confirmación */}
                <Stack.Screen
                    name="Confirmation"
                    component={ConfirmationScreen}
                    options={{ title: 'Confirmación', headerShown: true }}
                />

                {/* Pantalla de progreso del viaje */}
                <Stack.Screen
                    name="TripProgress"
                    component={TripProgressScreen}
                    options={{ title: 'Progreso del Viaje', headerShown: true }}
                />

                {/* Pantalla del perfil */}
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ title: 'Mi Perfil', headerShown: true }}
                />

                {/* Pantalla del historial */}
                <Stack.Screen
                    name="History"
                    component={HistoryScreen}
                    options={{ title: 'Historial', headerShown: true }}
                />

                {/* Pantalla de reseñas */}
                <Stack.Screen
                    name="Review"
                    component={ReviewScreen}
                    options={{ title: 'Calificación', headerShown: true }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;
