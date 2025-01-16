import { StyleSheet, Platform } from 'react-native'; // Asegúrate de importar Platform
import colors from './theme'; // Verifica que 'colors' esté definido correctamente en 'theme.js'

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue, // Color definido en 'theme.js'
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darkBlue, // Color definido en 'theme.js'
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.mediumBlue, // Color definido en 'theme.js'
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white, // Color definido en 'theme.js'
    fontSize: 16,
    fontWeight: 'bold',
  },
  shadowStyle: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4, // Sombra específica para Android
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Sombra para web
      },
    }),
  },
});

export default globalStyles;
