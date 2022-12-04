import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './screens/Login';

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;