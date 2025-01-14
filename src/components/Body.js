import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Body({ children }) {
  return <View style={styles.body}>{children}</View>;
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
});
