import React from "react";
import { AppRegistry } from "react-native";
import { AuthProvider } from "./src/hooks/AuthProvider";
import App from "./App";
import { name as appName } from "./app.json";

const Root = () => {
  console.log("Rendering Root component");
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);

if (document.getElementById("root")) {
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById("root"),
  });
}
