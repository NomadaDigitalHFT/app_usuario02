import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {/* Opcional: Botones u opciones de navegación */}
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navText}>Opciones</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#6200EE',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navButton: {
    padding: 10,
  },
  navText: {
    color: '#FFF',
    fontSize: 16,
  },
});
