import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);

if (document.getElementById("root")) {
  try {
    AppRegistry.runApplication(appName, {
      initialProps: {},
      rootTag: document.getElementById("root"),
    });
  } catch (error) {
    console.error("Error al inicializar la aplicación en el navegador:", error);
  }
}
