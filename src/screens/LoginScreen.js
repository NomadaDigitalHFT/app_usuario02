import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ButtonEntrar from "../elements/ButtonEntrar";
import { loginUser } from "../firebase/auth";
import { Helmet } from "react-helmet";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Por favor, ingresa correo y contraseña.");
      return null;
    }
    try {
      return await loginUser(email.trim(), password); // Retorna el usuario autenticado
    } catch (error) {
      console.error(error.message);
      alert("Error en el inicio de sesión: " + error.message);
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Helmet>
        <title>TaxiTip - Iniciar Sesión</title>
      </Helmet>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <ButtonEntrar onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: "#ccc",
  },
});

export default LoginScreen;




