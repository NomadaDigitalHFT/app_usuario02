import { StyleSheet } from 'react-native';
import colors from './theme';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darkBlue,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.mediumBlue,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default globalStyles;

