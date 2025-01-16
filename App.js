import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./src/hooks/AuthProvider";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import HistoryScreen from "./src/screens/HistoryScreen";

const App = () => {
  const { user } = useAuth();

  if (user === undefined) {
    console.log("App.js user is undefined");
    return <div>Loading...</div>;
  }

  console.log("App.js user is defined:", user);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<HomeScreen />} />
        ) : (
          <Route path="/" element={<WelcomeScreen />} />
        )}
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/history" element={<HistoryScreen />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
