import { StyleSheet } from 'react-native';
import colors from './theme'; // Importa el archivo de colores

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightBlue, // Usando colores de theme.js
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.darkBlue, // Usando colores de theme.js
    },
});

export default globalStyles;
