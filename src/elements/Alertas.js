import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated";

const Alertas = ({ message, type = "success", visible = false }) => {
  const translateY = useSharedValue(-100); // Posición inicial fuera de la pantalla

  useEffect(() => {
    if (visible) {
      translateY.value = withTiming(0, { duration: 500 }); // Mostrar alerta
    } else {
      translateY.value = withDelay(2000, withTiming(-100, { duration: 500 })); // Ocultar alerta con retraso
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "#4CAF50"; // Verde
      case "error":
        return "#F44336"; // Rojo
      case "warning":
        return "#FF9800"; // Naranja
      default:
        return "#2196F3"; // Azul
    }
  };

  return (
    <Animated.View style={[styles.alertContainer, animatedStyle, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.alertText}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 15,
    zIndex: 1000,
    alignItems: "center",
  },
  alertText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Alertas;

