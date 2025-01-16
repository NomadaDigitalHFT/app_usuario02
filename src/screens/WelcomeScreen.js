import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a TaxiTip!</Text>
      <Text style={styles.subtitle}>
        La forma más sencilla de solicitar y ofrecer servicios de transporte.
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Iniciar Sesión" onPress={() => navigation.navigate("Login")} />
        <Button title="Registrarse" onPress={() => navigation.navigate("SignUp")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
    color: "#555",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default WelcomeScreen;
