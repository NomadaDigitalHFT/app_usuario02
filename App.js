import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './src/styles/globalStyles';
import theme from './src/styles/theme';
import AppRoutes from './src/navigation/AppRoutes';
import AuthRoutes from './src/navigation/AuthRoutes';
import { AuthProvider, useAuth } from './src/hooks/AuthProvider';
 // Hook del contexto de autenticación

const App = () => {
  const { user } = useAuth(); // Validar el usuario autenticado

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <BrowserRouter>
          {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
