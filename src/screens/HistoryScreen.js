import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const mockData = [
  { id: '1', title: 'Viaje a Plaza Central', date: '2025-01-13' },
  { id: '2', title: 'Viaje a Calle 50', date: '2025-01-12' },
  { id: '3', title: 'Viaje al Aeropuerto', date: '2025-01-11' },
];

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Historial de Viajes</Text>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
});

export default HistoryScreen;
