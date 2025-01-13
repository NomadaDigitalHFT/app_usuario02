import React from 'react';
import MainNavigator from './src/navigation/AppNavigator'; // Asegúrate de que la ruta sea correcta

export default function App() {
    return <MainNavigator />;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
