import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./src/hooks/AuthProvider";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";


const App = () => {
  const { user } = useAuth();

  if (user === undefined) {
    return <div>Loading...</div>; // Pantalla de carga mientras se inicializa
  }

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<HomeScreen />} />
        ) : (
          <Route path="/" element={<WelcomeScreen />} />
        )}
        <Route path="*" element={<div>Página no encontrada</div>} />{" "}
        {/* Ruta para manejar 404 */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
