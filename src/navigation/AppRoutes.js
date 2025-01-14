import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
    </Routes>
  );
};

export default AppRoutes;
