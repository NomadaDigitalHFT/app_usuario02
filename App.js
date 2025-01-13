import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from './src/styles/globalStyles'; // Importa los estilos globales

export default function App() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>¡Hola Mundo!</Text>
        </View>
    );
}