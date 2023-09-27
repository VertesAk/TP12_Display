import React from 'react';
import { View, StyleSheet } from 'react-native';
import DisplaySimulator from './DisplaySimulator'; // Asegúrate de ajustar la ruta según la ubicación de tu componente

const App = () => {
  return (
    <View style={styles.container}>
      {/* Otros componentes de tu aplicación */}
      <DisplaySimulator />
      {/* Otros componentes de tu aplicación */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
