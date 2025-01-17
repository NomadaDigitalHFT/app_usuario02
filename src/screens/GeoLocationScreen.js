import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Helmet } from "react-helmet";

const GeoLocationScreen = () => {
  return (
    <View style={styles.container}>
      <Helmet>
        <title>TaxiTip - Geolocalización</title>
      </Helmet>
      <Text style={styles.title}>Geolocalización</Text>
      <Text style={styles.description}>
        Aquí podrás visualizar tu ubicación actual en tiempo real y acceder a las opciones relacionadas con tu ubicación.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginHorizontal: 10,
  },
});

export default GeoLocationScreen;


