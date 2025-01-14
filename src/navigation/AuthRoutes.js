import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
    </Routes>
  );
};

export default AuthRoutes;

