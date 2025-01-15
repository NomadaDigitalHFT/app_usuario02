import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Usando alias si ya está configurado
import { AuthProvider } from "./src/hooks/AuthProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
