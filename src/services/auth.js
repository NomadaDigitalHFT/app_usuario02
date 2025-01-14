import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"; // Asegúrate de que esta ruta sea correcta

// Registrar un nuevo usuario
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Retorna el usuario registrado
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error; // Lanza el error para que sea manejado en la UI
  }
};

// Iniciar sesión
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Retorna el usuario autenticado
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error; // Lanza el error para que sea manejado en la UI
  }
};

// Cerrar sesión
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("Usuario desconectado");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error; // Lanza el error para que sea manejado en la UI
  }
};
