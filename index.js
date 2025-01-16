import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './src/styles/globalStyles';
import theme from './src/styles/theme';
import AppRoutes from './src/navigation/AppRoutes';
import AuthRoutes from './src/navigation/AuthRoutes';
import { AuthProvider, useAuth } from './src/hooks/AuthProvider';

const App = () => {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
