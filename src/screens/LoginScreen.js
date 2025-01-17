import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import ButtonEntrar from "../elements/ButtonEntrar";
import { loginUser } from "../firebase/auth";
import { Helmet } from "react-helmet";
import Alertas from "../elements/Alertas"; // Importamos el componente Alertas

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const handleLogin = async () => {
    if (!email || !password) {
      setAlertMessage("Por favor, ingresa correo y contraseña.");
      setAlertType("error");
      setAlertVisible(true);
      return null;
    }
    try {
      const user = await loginUser(email.trim(), password);
      setAlertMessage("Inicio de sesión exitoso.");
      setAlertType("success");
      setAlertVisible(true);
      return user;
    } catch (error) {
      console.error(error.message);
      setAlertMessage("Error en el inicio de sesión: " + error.message);
      setAlertType("error");
      setAlertVisible(true);
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
      {/* Componente Alertas */}
      <Alertas message={alertMessage} type={alertType} visible={alertVisible} />
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




