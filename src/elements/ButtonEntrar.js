import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

const ButtonEntrar = ({ onPress }) => {
  const navigation = useNavigation();
  const { setUser } = useUser();

  const handlePress = async () => {
    try {
      const user = await onPress();
      if (user) {
        setUser(user); // Actualiza el contexto con el usuario autenticado
        navigation.navigate('GeoLocation'); // Redirige a GeoLocationScreen
      } else {
        alert('Usuario o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error al autenticar:', error.message);
      alert('No se pudo iniciar sesión. Inténtalo de nuevo.');
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Entrar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonEntrar;
