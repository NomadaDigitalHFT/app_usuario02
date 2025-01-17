import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Helmet } from "react-helmet";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Helmet>
        <title>TaxiTip - Bienvenido</title>
      </Helmet>
      <Image 
        source={require("../assets/icons/Moneda_taxitip.png")} 
        style={styles.profileImage}
      />

      <Text style={styles.title}>¡Bienvenido a TaxiTip!</Text>
      <Text style={styles.subtitle}>
        La forma más sencilla de solicitar y ofrecer servicios de transporte.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
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
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Hace que la imagen sea circular
    borderWidth: 2, // Borde alrededor de la imagen
    borderColor: "#007bff", // Color del borde
    margin: 10, // Espaciado alrededor de la imagen
    shadowColor: "#000", // Sombra de la imagen
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.3, // Opacidad de la sombra
    shadowRadius: 3, // Difuminado de la sombra
    elevation: 5, // Sombra en Android
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    width: "40%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default WelcomeScreen;
