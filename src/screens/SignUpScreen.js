import React, { useState } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { registerUser } from "../firebase/auth";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const validateInputs = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Por favor ingresa un correo válido.");
      return false;
    }

    if (password.length < 6) {
      Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres.");
      return false;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateInputs()) return;

    try {
      await registerUser(email.trim(), password);
      Alert.alert("Éxito", "Usuario registrado correctamente.", [
        {
          text: "OK",
          onPress: () => navigation.replace("Login"),
        },
      ]);
    } catch (error) {
      Alert.alert(
        "Error",
        error.message || "No se pudo registrar el usuario. Inténtalo de nuevo."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regístrate</Text>
      <InputField
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button onClick={handleRegister}>Registrarse</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
});

export default SignUpScreen;

