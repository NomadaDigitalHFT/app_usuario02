import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";

const AuthContext = createContext();
const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

