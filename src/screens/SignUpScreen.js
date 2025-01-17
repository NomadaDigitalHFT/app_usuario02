import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { registerUser } from "../firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Alertas from "../elements/Alertas"; // Importamos Alertas
import { validateEmail } from "../utils/validators"; // Importamos el validador

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const navigation = useNavigation();

  const validateInputs = () => {
    if (!email || !password || !confirmPassword) {
      setAlertMessage("Todos los campos son obligatorios.");
      setAlertType("error");
      setAlertVisible(true);
      return false;
    }

    if (!validateEmail(email)) {
      setAlertMessage("Por favor ingresa un correo válido.");
      setAlertType("error");
      setAlertVisible(true);
      return false;
    }

    if (password.length < 6) {
      setAlertMessage("La contraseña debe tener al menos 6 caracteres.");
      setAlertType("error");
      setAlertVisible(true);
      return false;
    }

    if (password !== confirmPassword) {
      setAlertMessage("Las contraseñas no coinciden.");
      setAlertType("error");
      setAlertVisible(true);
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateInputs()) return;

    try {
      await registerUser(email.trim(), password);
      setAlertMessage("Usuario registrado correctamente.");
      setAlertType("success");
      setAlertVisible(true);
      setTimeout(() => navigation.replace("Login"), 2000); // Redirige tras 2 segundos
    } catch (error) {
      setAlertMessage(error.message || "No se pudo registrar el usuario. Inténtalo de nuevo.");
      setAlertType("error");
      setAlertVisible(true);
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
      <Alertas message={alertMessage} type={alertType} visible={alertVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
});

export default SignUpScreen;



