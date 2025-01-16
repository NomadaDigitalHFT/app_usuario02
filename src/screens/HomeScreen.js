import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { registerUser } from '../firebase/firebaseConfig';
import { validateEmail, validatePassword } from '../utils/validators';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor, ingresa un correo válido.');
      console.log('Error', 'Por favor, ingresa un correo válido.');
      
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert(
        'Error',
        'La contraseña debe tener al menos 6 caracteres y contener letras y números.'
      );
      console.log('Error', 'La contraseña debe tener al menos 6 caracteres y contener letras y números.');
      
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      console.log('Error', 'Las contraseñas no coinciden.');
      
      return;
    }

    try {
      await registerUser(email, password);
      Alert.alert('Éxito', 'Usuario registrado correctamente.', [
        {
          text: 'OK',
          onPress: () => navigation.replace('HomeScreen'), // Redirección a HomeScreen
        },
      ]);
    } catch (error) {
      Alert.alert('Error', 'No se pudo registrar el usuario. Intenta nuevamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regístrate</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default SignUpScreen;



