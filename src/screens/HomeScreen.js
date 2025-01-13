import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido a TaxiTip!</Text>
            <Text style={styles.subtitle}>¿Qué quieres hacer?</Text>
            
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('GeoLocation')} // Ajusta a la ruta correcta
            >
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, styles.secondaryButton]} 
                onPress={() => navigation.navigate('GeoLocation')} // Cambia la ruta según la pantalla de registro
            >
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
        width: '80%',
        alignItems: 'center',
    },
    secondaryButton: {
        backgroundColor: '#6c757d',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
