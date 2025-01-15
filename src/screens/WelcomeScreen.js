import React from 'react';
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>¡Bienvenido a TaxiTip!</h1>
      <p style={styles.subtitle}>
        La forma más sencilla de solicitar y ofrecer servicios de transporte.
      </p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleLogin}>
          Iniciar Sesión
        </button>
        <button style={styles.button} onClick={handleSignUp}>
          Registrarse
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#555",
  },
  buttonContainer: {
    display: "flex",
    gap: "1rem",
  },
  button: {
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default WelcomeScreen;